import React from 'react'
import { Link } from 'gatsby'

const PostTags = ({edges}) => {
	const allTags = edges.reduce((acc, curr) => {
		curr.node.frontmatter.tags.forEach(tag => {
			if (acc.indexOf(tag) < 0) {
				acc.push(tag)
			}
		})
		return acc
	}, [])
	return(
		<div className="archive__container">
			<div className="widget-title subtitle-border">
				Browse by tag
			</div>
			{allTags.map((tag, i) => {
				return <div className="widget-link" key={i}><Link to={`/tags/${tag}`}>{tag}</Link></div>
			})}
		</div>
	)
}

export default PostTags