import React from 'react'

import SearchBar from '../components/searchBar'
import Git from '!svg-react-loader!../images/svg/git.svg?name=Git'

const BlogAside = () => {

	return(
		<div className="blog-aside">
			<SearchBar />
			<Git />
		</div>
	)
}

export default BlogAside