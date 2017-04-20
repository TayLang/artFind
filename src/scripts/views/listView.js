import React from 'react'
// import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import ACTIONS from '../ACTIONS.js'
import STORE from '../STORE.js'
import {ArtCollection} from '../models/artModels.js'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Banner from './components/banner.js'

var ListView = React.createClass({
	componentWillMount : function() {
//		console.log(this)
		ACTIONS.fetchArt()
		//console.log(this)
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},	

	getInitialState : function() {
		//console.log(STORE.data)
		return STORE.data
	},

	render : function() {
		//console.log(this)
		return (
			<div>
				<Banner />
				<AllMarkers artCollection={this.state.artColl}/>
			</div>
		)
	}
})

const AllMarkers = (props) => {
	console.log(props.artCollection.models)
	return (
		<div>
			{props.artCollection.map(splitter)} 
		</div>
		)
}

var splitter = function(artModel) {
	return <ArtMod model={artModel}></ArtMod>
}

var ArtMod = function(props) {
	var upArr = []
	var newArr = props.model.get('LatLong').split(',')
    var lat = newArr[0]
    var long = newArr[1]
    upArr.push(Number(lat), Number(long))
	return (
		<div className="listBox">	
			<p>Piece Name: {props.model.get('Display Title')}</p>
			<p>Artist: {props.model.get('Display Artist')}</p>
			<p>Location: {props.model.get('Current Location')}</p>
			<a href={`/#detail/${props.model.get('_id')}`}>
				<p>Would You Like to Know More?</p>
			</a>
		</div>
	)
}


export default ListView