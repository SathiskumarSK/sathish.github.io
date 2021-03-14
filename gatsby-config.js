module.exports = {
  siteMetadata: {
    title: `sathiskumar`,
    description: `Sathiskumar is a UX designer From a Engineering Background.`,
    author: `Sathiskumar`,
    pathPrefix: "/sathish.github.io",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        storageKey: 'dark',
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `chivo`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               quality: 100,
               maxWidth: 1800,
               showCaptions: true,
             },
           },
           {
              resolve: "gatsby-remark-custom-blocks",
              options: {
                blocks: {
                  wideImage: {
                    classes: "wideImage",
                  },
                  slug: {
                    classes: "slug",
                  },
                  video: {
                    classes: "video",
                  },
                  emphasisText: {
                    classes: "emphasisText"
                  },
                },
              },
            },
            {
              resolve: "gatsby-remark-copy-linked-files",
            },
          ],
        },
     },
  ],
}
