module.exports = {
  siteMetadata: {
    title: `__websdev`,
    description: `Michael Weber's personal website, portfolio, blog. Howdy folks.`,
    author: `Michael`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Weber's personal site`,
        short_name: `websdev`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/comfyfrog.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
  ],
}
