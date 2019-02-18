module.exports = {
  siteMetadata: {
    title: `Ruben Karapetyan`,
    description: `My personal website and blog.`,
    author: `@roubkar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ruben Karapetyan`,
        short_name: `roubkar`,
        start_url: `/`,
        background_color: `rgb(55, 95, 70)`,
        theme_color: `rgb(55, 95, 70)`,
        display: `minimal-ui`,
        icon: `src/images/me.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
