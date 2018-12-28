import React from 'react'
import PropTypes from 'prop-types'

const WorkCard = ({title, description, repo, link}) => {

	return(
		<div style={{width: "25%", height: "10rem", border: "1px solid black"}}>
			<h1>{title}</h1>
			<div>
				<div>
					{description}
				</div>
				<a href={repo}>CODE</a><br/>
				<a href={link}>PROJECT</a>
			</div>
		</div>
	)
}

WorkCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	repo: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
}

export default WorkCard