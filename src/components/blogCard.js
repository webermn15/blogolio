import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import DefaultProgrammingImage from './defaultProgrammingImage'
import Tag from '!svg-react-loader!../images/svg/tag.svg?name=Tag'

const BlogCard = ({frontmatter, fields}) => {
	const { title, date, author, spoiler, tags } = frontmatter
	const { slug } = fields
	const transformedTags = tags.map((tag) => tag[0].toUpperCase() + tag.slice(1))
	return(
		<div className="blog-card">
			<div className="blog-card__wrapper">
				<Link
					className="blog-card__link"
					to={slug}
					style={{color: "black"}}
				>
					<div className="blog-card-info">
						<div className="blog-card__header">
							<div className="bc-title">{title}</div>
							<div className="bc-subtitle subtitle-border">
								<div className="bc-tags"><Tag className="tag-icon" /><span>:{transformedTags.map((tag, i) => <span className="tag-span" key={i}>{` ${tag}`}</span>)}</span></div>
								<div className="date-author"><span>{author}</span>/ <span>{date}</span></div>
							</div>
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