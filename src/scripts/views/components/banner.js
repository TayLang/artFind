import React from 'react'

var Banner = React.createClass({
	render : function() {
		return (
			<div className="banner">
				<img src='../../images/PreservonsBanner.jpg' />
				<h1>Explore Houston Art</h1>
				<div className="banLinks">
					<button className="welcomeButton" onClick={function() {location.hash = 'welcome'}}>Welcome</button>

					<button className="welcomeButton" onClick={function() {location.hash = 'main'}}>Map</button>

					<button className="welcomeButton" onClick={function() {location.hash = 'list'}}>List</button>

				</div>
			</div>
			)
	}
})

export default Banner