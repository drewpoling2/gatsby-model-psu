module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        // Here is how we handle CSS variables/CSS grid for IE11.
      },
    },
  ],
};
