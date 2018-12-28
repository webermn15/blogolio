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
				<a href={repo}>CODE</a>
				<a href={link}>PROJECT</a>
			</div>
		</div>
	)
}

export default WorkCard