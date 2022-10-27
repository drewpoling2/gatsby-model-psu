exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulQuickLinksCards {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading quick links", JSON.stringify(result.errors))
  }

  result.data.allContentfulQuickLinksCards.nodes.forEach(quickLink => {
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
}
