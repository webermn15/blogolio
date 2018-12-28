import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const BlogCard = ({excerpt, frontmatter, fields}) => {
	const { title, date, author } = frontmatter
	const { slug } = fields
	return(
	  <div key={title}>
	    <h3>{title}</h3>
	    <h5>{`${author}  -  ${date}`}</h5>
	    <div>
	    	<div>
	      	{excerpt}
	      </div>
	      <Link
	        to={slug}
	      >
	        Read more
	      </Link>
	    </div>
	  </div>
	)
}

BlogCard.propTypes = {
	excerpt: PropTypes.string,
	frontmatter: PropTypes.object,
	fields: PropTypes.object
}

export default BlogCard