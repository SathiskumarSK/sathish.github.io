/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const ProjectTemplate = path.resolve('src/templates/ProjectTemplate.js')

    resolve(
      graphql(
        `query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: ProjectTemplate,
            context: {
              pathSlug: path
            }
          })
          resolve();
        });
      })
    )
  })
})
