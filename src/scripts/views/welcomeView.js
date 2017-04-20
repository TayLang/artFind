import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from '../ACTIONS.js'

var WelcomeView = React.createClass({
	render : function() {
		return (
			<div className='backgroundPic'>
				<img src='../images/Preservons.jpg'/>
				<h1 className="welcomeHead">Explore Houston Art</h1>
				<button className="goToMap" onClick={function() {location.hash = 'main'}}>Go To Map</button>
			</div>
		)
	}
})

export default WelcomeView