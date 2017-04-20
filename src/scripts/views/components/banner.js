import React from 'react'

var Banner = React.createClass({
	render : function() {
		return (
			<div className="banner">
				<h1>Houston Public Art</h1>
				<a href='/#main'>
					<p>Map</p>
				</a>
				<a href='/#welcome'>
					<p>Welcome</p>
				</a>
				<a href='./#list'>
					<p>List</p>
				</a>
			</div>
			)
	}
})

export default Banner