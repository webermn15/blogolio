import React from 'react'
import { Link } from 'gatsby'

const RecentArticles = ({edges}) => {
	return(
		<div className="archive__container">
			<div className="widget-title subtitle-border">
				Recent posts
			</div>
			{edges.map(({node}, i) => {
				return <div className="widget-link" key={i}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></div>
			})}
		</div>
	)
}

export default RecentArticles