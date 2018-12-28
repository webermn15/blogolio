import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const WorkCard = ({frontmatter, fields}) => {
	const { title, description, link, repo } = frontmatter
	const { slug } = fields
	return(
		<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "25%", height: "10rem", border: "1px solid black", textAlign: "center"}}>
			<Link
				to={slug}
				style={{marginBottom: "1rem"}}
			>
				<h1>{title}</h1>
				<div>
					<div>
						{description}
					</div>
				</div>
			</Link>
			<div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0.5rem"}}>
				<a href={repo}>CODE</a><br/>
				<a href={link}>PROJECT</a>
			</div>
		</div>
	)
}

WorkCard.propTypes = {
	fields: PropTypes.object.isRequired,
	frontmatter: PropTypes.object.isRequired
}

export default WorkCard