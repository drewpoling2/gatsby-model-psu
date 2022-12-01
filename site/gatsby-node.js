const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulHomepageQuickLinksCards {
        nodes {
          slug
        }
      }
      allContentfulCustomPage {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading quick links", JSON.stringify(result.errors))
  }

  result.data.allContentfulHomepageQuickLinksCards.nodes.forEach(quickLink => {
    actions.createPage({
      path: `/${quickLink.slug}/`,
      component: require.resolve(
        "./src/templates/quick-links-page-template.jsx"
      ),
      context: {
        slug: quickLink.slug,
      },
    })
  })
  result.data.allContentfulCustomPage.nodes.forEach(customPage => {
    actions.createPage({
      path: `/${customPage.slug}/`,
      component: require.resolve("./src/templates/custom-page-template.jsx"),
      context: {
        slug: customPage.slug,
      },
    })
  })
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          return source.internal.type.replace("Contentful", "")
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

  actions.createFieldExtension({
    name: "imageUrl",
    extend(options) {
      const schemaRE = /^\/\//
      const addURLSchema = str => {
        if (schemaRE.test(str)) return `https:${str}`
        return str
      }
      return {
        resolve(source) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group"
            default:
              return "Link"
          }
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "richText",
    extend(options) {
      return {
        resolve(source, args, context, info) {
          const body = source.body
          const doc = JSON.parse(body.raw)
          const html = documentToHtmlString(doc)
          return html
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      url: String
    }
    
    interface HomepageParagraphSummary implements Node & HomepageBlock & CustomPageBlock {
      id: ID!
      paragraphSummarySubtitle: String
      paragraphSummaryAuthor: String
      paragraphSummaryText: String
      blocktype: String
    }

    interface HomepageQuickLinksCards implements Node & HomepageBlock & CustomPageBlock{
      id: ID!
      cardTitle: String
      slug: String
      cardDescription: String
      blocktype: String
      image: HomepageImage
    }
    
    interface QuickLinkGroup implements Node & HomepageBlock & CustomPageBlock{
      id: ID!
      text: String
      blocktype: String
      quickLinkList: [HomepageQuickLinksCards]
    }

    interface HomepageLandingPageImageHero implements Node & HomepageBlock & CustomPageBlock {
      id: ID!
      heading: String
      landingPageHeroImageText: String
      subtitle: String
      blocktype: String
      image: HomepageImage 
    }

    interface HomepageWideImageHero implements Node & HomepageBlock & CustomPageBlock {
      id: ID!
      heading: String
      Subtitle: String
      blocktype: String
      image: HomepageImage
    }

    interface RichTextBlock implements Node & HomepageBlock & CustomPageBlock {
      id: ID!
      blocktype: String
      title: String
      richText: RichText
    }

    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface CustomPageBlock  {
      id: ID!
      blocktype: String
    }

    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }

    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }

    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }

    interface NavItemGroup implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      name: String
      navItems: [NavItem]
    }

    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      content: [HomepageBlock]
    }

    interface CustomPage implements Node {
      id: ID!
      title: String
      description: String
      content: [CustomPageBlock]
    }

    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
    }

    interface LayoutFooter implements Node {
      id: ID!
      links: [HomepageLink]
      meta: [HomepageLink]
      copyright: String
    }

    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface Page implements Node {
      id: ID!
      slug: String
      title: String
      description: String
      image: HomepageImage
      html: String!
    }
  `)

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type ContentfulHomepageParagraphSummary implements Node & HomepageParagraphSummary & HomepageBlock & CustomPageBlock {
      id: ID!
      paragraphSummarySubtitle: String
      paragraphSummaryAuthor: String
      paragraphSummaryText: String
      blocktype: String
    }

    type RichText {
      raw: JSON
      html: String!
      markdown: String!
      text: String!
    }

    type ContentfulHomepageQuickLinksCards implements Node & HomepageQuickLinksCards & HomepageBlock & CustomPageBlock {
      id: ID!
      cardTitle: String
      slug: String
      cardDescription: String
      blocktype: String
      image: HomepageImage @link(from: "image___NODE")
    }

    type ContentfulQuickLinkGroup implements Node & QuickLinkGroup & HomepageBlock & CustomPageBlock {
      id: ID!
      text: String
      blocktype: String
      quickLinkList: [HomepageQuickLinksCards]
        @link(from: "quickLinkList___NODE")
    }

    type ContentfulHomepageLandingPageImageHero implements Node & HomepageLandingPageImageHero & HomepageBlock & CustomPageBlock {
      id: ID!
      heading: String
      landingPageHeroImageText: String
      subtitle: String
      blocktype: String
      image: HomepageImage @link(from: "image___NODE")
    }

    type ContentfulHomepageWideImageHero implements Node & HomepageWideImageHero & HomepageBlock & CustomPageBlock {
      id: ID!
      heading: String
      Subtitle: String
      blocktype: String
      image: HomepageImage @link(from: "image___NODE")
    }

    type ContentfulHomepageLink implements Node & HomepageLink @dontInfer {
      id: ID!
      href: String
      text: String
    }

    type ContentfulNavItem implements Node & NavItem & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(from: "icon___NODE")
      description: String
    }

    type ContentfulNavItemGroup implements Node & NavItemGroup & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Group")
      name: String
      navItems: [NavItem] @link(from: "navItems___NODE")
    }

    type ContentfulAsset implements Node & HomepageImage {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }

    type ContentfulHomepage implements Node & Homepage @dontInfer {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      content: [HomepageBlock] @link(from: "content___NODE")
    }

    type ContentfulCustomPage implements Node & CustomPage @dontInfer {
      id: ID!
      title: String
      description: String
      slug: String
      content: [CustomPageBlock] @link(from: "content___NODE")
    }
  `)

  // Layout types
  actions.createTypes(/* GraphQL */ `
    type ContentfulLayoutHeader implements Node & LayoutHeader {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems___NODE")
      cta: HomepageLink @link(from: "cta___NODE")
    }

    type ContentfulLayoutFooter implements Node & LayoutFooter @dontInfer {
      id: ID!
      links: [HomepageLink] @link(from: "links___NODE")
      meta: [HomepageLink] @link(from: "meta___NODE")
      copyright: String
    }

    type ContentfulLayout implements Node & Layout @dontInfer {
      id: ID!
      header: LayoutHeader @link(from: "header___NODE")
      footer: LayoutFooter @link(from: "footer___NODE")
    }

    type ContentfulRichTextBlock implements Node & RichTextBlock & CustomPageBlock & HomepageBlock {
      id: ID!
      blocktype: String
      title: String
      richText: RichText
    }
  `)

  // Page types
  actions.createTypes(/* GraphQL */ `
    type ContentfulPage implements Node & Page {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      html: String! @richText
    }
  `)
}
