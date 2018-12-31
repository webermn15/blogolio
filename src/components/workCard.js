import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

const WorkCard = ({frontmatter, fields}) => {
	const { title, description, link, repo, thumbnail } = frontmatter
	const { slug } = fields
	return(
		<div className="work-card__wrapper">
			<Link
				to={slug}
				className="work-card__thumb-wrapper"
			>
				<div className="wctw-hoverfade"/>
				<Img fluid={thumbnail.childImageSharp.fluid} alt={title} className="work-card__thumb" />
			</Link>
			<div className="work-card__info">
				<div>
					<Link
						to={slug}
						className="work-card__title-link-wrapper"
					>
						<div className="work-card__title">{title}</div>
					</Link>
				</div>
				<div className="work-card__content">
					<div className="work-card__links subtitle-border">
						<a href={repo}>Github Repo</a>
						<a href={link}>Project</a>
					</div>
					<div className="work-card__description">
						{description}
					</div>
				</div>
			</div>
		</div>
	)
}

WorkCard.propTypes = {
	fields: PropTypes.object.isRequired,
	frontmatter: PropTypes.object.isRequired
}

export default WorkCard