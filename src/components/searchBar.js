import React from 'react'

import searchIcon from '../images/search-icon.svg'

const SearchBar = () => {
	return(
		<div className="blog-search">
			<form className="blog-search__wrapper">
				<input type="search" placeholder="Search archives" />
				<button className="blog-search__button">
					<img alt="search-button" src={searchIcon} className="svg-icon" />
				</button>
			</form>
		</div>
	)
}

export default SearchBar