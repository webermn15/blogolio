import React from 'react'

import github from '../images/social/github.png'
import twitter from '../images/social/twitter-circle.png'
import linkedin from '../images/social/linkedin.png'

const SocialIcons = () => (
	<div className="social-icons">
	  <div className="social-icon__wrapper">
	    <a href="https://twitter.com/_websdev">
	      <img src={twitter} alt="Twitter" />
	    </a>
	    <a href="https://github.com/webermn15">
	      <img src={github} alt="Github" />
	    </a>
	    <a href="https://linkedin.com/in/michaelnweber">
	      <img src={linkedin} alt="LinkedIn" />
	    </a>
	  </div>
	</div>
)

export default SocialIcons