import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import RecentArticles from './recentArticles'
import PostTags from './postTags'

const Archives = () => {
	return(
		<StaticQuery
			query={archiveQuery}
			render={({allMarkdownRemark}) => {
				return(
					<div>
						<RecentArticles {...allMarkdownRemark} />
						<PostTags {...allMarkdownRemark} />
					</div>
				)
			}}
		/>
	)
}

export default Archives

export const archiveQuery = graphql`
	query ArchiveQuery {
	  allMarkdownRemark(
	    filter: { fileAbsolutePath: { regex: "/src/pages/posts//" } }
	    sort: { fields: [frontmatter___date], order: DESC }
	    limit: 7
	  ) {
	    edges {
	      node {
	      	fields {
	      		slug
	      	}
	        frontmatter {
	          date
	          title
	          tags
	        }
	      }
	    }
	  }
	}
`