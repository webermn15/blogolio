import React from 'react'

import SearchBar from './searchBar'
import Archives from './archives'

const BlogAside = () => {
	return(
		<div className="blog-aside">
			<SearchBar />
			<Archives />
		</div>
	)
}

export default BlogAside