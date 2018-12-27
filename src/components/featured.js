import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Featured = ({excerpt, frontmatter, fields}) => {
	const { title, date, author } = frontmatter
	const { slug } = fields
	return(
		<div style={{
			position: "relative", 
			width: "100%", 
			height: "10rem", 
			border: "1px solid black"
		}}>
			Latest Post
			<Link
				to={slug}
				style={{color: "black"}}
			>
				<div style={{
					position: "absolute", 
					left: 0, 
					bottom: 0, 
					height: "50%", 
					width: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.3)"
				}}>
					<div style={{fontWeight: 700}}>
						{title}
					</div>
					{excerpt}
				</div>
			</Link>
		</div>
	)
}

export default Featured