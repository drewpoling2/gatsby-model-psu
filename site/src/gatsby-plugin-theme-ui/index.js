import merge from "lodash.merge"
import baseTheme from "gatsby-theme-theme-ui-example/src/gatsby-plugin-theme-ui"

//this is where you shadow the imported theme if you want to
export default merge({}, baseTheme, {
  colors: {},
})
