import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from '../ACTIONS.js'
import STORE from '../STORE.js'
import {ArtCollection} from '../models/artModels.js'
import {ArtModel} from '../models/artModels.js'
import Banner from './components/banner.js'

var DetailView = React.createClass({

	componentWillMount : function() {
		ACTIONS.fetchOneArt(this.props.artID)
		
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState : function() {
		
		return STORE.data
	},

	render: function() {
		console.log(this.state.artMod)
		return (
			<div className="detailWrapper">
				<Banner />
				<div className="artInfo">
					<img src={`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=
						${this.state.artMod.get('Current Location')}&heading=151.78&key=AIzaSyDwT8l8c7TN5wvYY8TgOGhvHYTDjRKO7vc`} />
					<p>Artist: {this.state.artMod.get('Display Artist')}</p>
					<p>Piece Name: {this.state.artMod.get('Display Title')}</p>
					<p>More Specificer Location: {this.state.artMod.get('Specific Location')}</p>
					<p>Creation Date: {this.state.artMod.get('Creation Date')}</p>
					<p>Credit Line: {this.state.artMod.get('Credit Line')}</p>
				</div>
			</div>	
		)
	}
})

export default DetailView