const path = require('path')
const Promise = require('bluebird')
const { createFilePath } = require('gatsby-source-filesystem')

const createPages = ({ actions, graphql }, filter, templatePath) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		resolve(
			graphql(`
			{
				allMarkdownRemark(
					filter: { fileAbsolutePath: { regex: "${filter}" } }
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
					component: templatePath
				})
			})
		})
		)
	})
}

const workTemplate = path.resolve('src/templates/work-detail-template.js')
const workFilter = '/src/pages/work/'

const blogPostTemplate = path.resolve('src/templates/blog-post-template.js')
const blogPostFilter = '/src/pages/posts/'

exports.createPages = async (props) => {
	await createPages(props, workFilter, workTemplate)
	await createPages(props, blogPostFilter, blogPostTemplate)
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