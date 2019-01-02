const path = require('path')
const Promise = require('bluebird')
const { createFilePath } = require('gatsby-source-filesystem')

const createPages = ({ actions, graphql }, filter, templatePath, isBlogPost) => {
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
								tags
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

			if (isBlogPost) {
				const allTags = posts.reduce((acc, curr) => {
					curr.node.frontmatter.tags.forEach(tag => {
						if (acc.indexOf(tag) < 0) {
							kebabTag = tag.replace(/\s+/g, '-')
							acc.push(kebabTag)
						}
					})
					return acc
				}, [])

				allTags.forEach((tag, i) => {
					createPage({
						path: `/tags/${tag}/`,
						component: path.resolve('src/templates/tags-template.js'),
						context: {
							tag
						}
					})
				})
			}

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
	await createPages(props, workFilter, workTemplate, false)
	await createPages(props, blogPostFilter, blogPostTemplate, true)
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