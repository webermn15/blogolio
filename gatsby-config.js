module.exports = {
  siteMetadata: {
    title: `wbdv`,
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
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/svg/`
        }
      }
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            quality: 100,
            maxWidth: 500,
            showCaptions: true,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            inlineCodeMarker: '÷',
            showLineNumbers: true,
          },
        },
      ],
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Weber's personal site`,
        short_name: `websdev`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/comfyfrog.png`,
        theme_color_in_head: false,
      },
    },
  ],
}
