import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import DefaultFeaturedImage from './defaultFeaturedImage'

const Featured = ({excerpt, frontmatter, fields}) => {
	const { title, date, author } = frontmatter
	const { slug } = fields
	return(
		<div className="featured">
			<div className="featured-wrapper">
				Latest Post
				<Link
					to={slug}
					style={{color: "black"}}
				>
					<div className="featured-info">
						<div style={{fontWeight: 700}}>
							{title} <br />{author} {date}
						</div>
						{excerpt}
					</div>
				</Link>
			</div>
			<DefaultFeaturedImage />
		</div>
	)
}

Featured.propTypes = {
	excerpt: PropTypes.string,
	frontmatter: PropTypes.object,
	fields: PropTypes.object
}

export default Featured