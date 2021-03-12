const languages = require('./src/data/languages');
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    languages,
    menu: [
      {label: 'home', slug: '/'},
      {label: 'posts', slug: '/news/'}
    ]
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `
        }
      }
    },
    'gatsby-plugin-styled-components'
  ],
}
