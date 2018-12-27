const path = require('path')
const Promise = require('bluebird')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`)

		resolve(
			graphql(`
			{
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 500
				) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								title
							}
						}
					}
				}
			}
		`).then(result => {
			if (result.errors) {
				console.log(result.errors)
				reject(result.errors)
			}

			const posts = result.data.allMarkdownRemark.edges

			posts.forEach((page, i) => {
				createPage({
					path: page.node.fields.slug,
					component: blogPostTemplate
				})
			})
		})
		)
	})
}

exports.onCreateNode = ({ node, getNode, actions}) => {
	const { createNodeField } = actions
	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: 'pages'})
		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}