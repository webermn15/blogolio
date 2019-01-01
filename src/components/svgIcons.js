import React from 'react'

import Javascript from '!svg-react-loader!../images/svg/javascript.svg?name=Javascript'
import Css3 from '!svg-react-loader!../images/svg/css3.svg?name=Css3'
import Git from '!svg-react-loader!../images/svg/git.svg?name=Git'
import Expressjs from '!svg-react-loader!../images/svg/expressjs.svg?name=Expressjs'
import Html5 from '!svg-react-loader!../images/svg/html5.svg?name=Html5'
import Nodejs from '!svg-react-loader!../images/svg/nodejs.svg?name=Nodejs'
import Photoshop from '!svg-react-loader!../images/svg/photoshop.svg?name=Photoshop'
import Postgresql from '!svg-react-loader!../images/svg/postgresql.svg?name=Postgresql'
import Reactjs from '!svg-react-loader!../images/svg/reactjs.svg?name=Reactjs'
import Ruby from '!svg-react-loader!../images/svg/ruby.svg?name=Ruby'
import Sass from '!svg-react-loader!../images/svg/sass.svg?name=Sass'
import Webpack from '!svg-react-loader!../images/svg/webpack.svg?name=Webpack'
import Redux from '!svg-react-loader!../images/svg/redux.svg?name=Redux'
import Gatsby from '!svg-react-loader!../images/svg/gatsby.svg?name=Gatsby'

const SvgIcons = ({tags}) => {
	const iconComponents = [
		<Javascript className="tech-svg" key={'javascript'}/>,
		<Css3 className="tech-svg" key={'css3'}/>,
		<Html5 className="tech-svg" key={'html5'}/>,
		<Git className="tech-svg" key={'git'}/>,
		<Reactjs className="tech-svg react-recolor" key={'reactjs'}/>,
		<Webpack className="tech-svg webpack-recolor" key={'webpack'}/>,
		<Redux className="tech-svg" key={'redux'} />,
		<Gatsby className="tech-svg gatsby-recolor" key={'gatsby'} />,
		<Sass className="tech-svg" key={'sass'}/>,
		<Postgresql className="tech-svg" key={'postgresql'}/>,
		<Nodejs className="tech-svg" key={'nodejs'}/>,
		<Ruby className="tech-svg" key={'ruby'}/>,
		<Expressjs className="tech-svg" key={'expressjs'}/>,
		<Photoshop className="tech-svg photoshop-recolor" key={'photoshop'}/>
	]

	// return iconComponents

	return iconComponents.reduce((acc, curr) => {
		if (tags.indexOf(curr.key) >= 0) {
			acc.push(curr)
		}
		return acc
	}, [])
}
export default SvgIcons