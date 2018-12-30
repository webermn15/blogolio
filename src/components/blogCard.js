import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import DefaultProgrammingImage from './defaultProgrammingImage'

const BlogCard = ({frontmatter, fields}) => {
	const { title, date, author, spoiler } = frontmatter
	const { slug } = fields
	return(
		<div className="blog-card">
			<div className="blog-card__wrapper">
				<Link
					to={slug}
					style={{color: "black"}}
				>
					<div className="blog-card-info">
						<div className="blog-card__header">
							<div className="bc-title">{title}</div>
							<div className="bc-subtitle subtitle-border"><span>{author}</span>/ <span>{date}</span></div>
						</div>
						<div className="blog-card__content">
							<div className="blog-card__excerpt">
								{spoiler}
							</div>
							<div className="blog-card__cta">
								Continue reading ⇒
							</div>
						</div>
					</div>
				</Link>
			</div>
			<DefaultProgrammingImage />
		</div>
	)
}

BlogCard.propTypes = {
	excerpt: PropTypes.string,
	frontmatter: PropTypes.object,
	fields: PropTypes.object
}

export default BlogCard