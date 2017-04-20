import React from 'react'
// import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import ACTIONS from '../ACTIONS.js'
import STORE from '../STORE.js'
import {ArtCollection} from '../models/artModels.js'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Banner from './components/banner.js'

const position = [29.7630138,-95.3675902]



var splitter = function(artModel) {
	return <PopupMarker model={artModel}></PopupMarker>
}

const PopupMarker = (props) => {
	var upArr = []
	var newArr = props.model.get('LatLong').split(',')
    var lat = newArr[0]
    var long = newArr[1]
    upArr.push(Number(lat), Number(long))

	return (
		<Marker position={upArr}>
			<Popup>
				<span>
					<p>Piece Name: {props.model.get('Display Title')}</p>
					<p>Artist: {props.model.get('Display Artist')}</p>
					<a href={`/#detail/${props.model.get('_id')}`}>
						<p>Would You Like to Know More?</p>
					</a>
				</span>
			</Popup>
		</Marker>
		)
}

const AllMarkers = (props) => {
	return (
		<div>
		{props.artCollection.map(splitter)} 
		</div>
		)
}

var MapView = React.createClass({
	componentWillMount : function() {
		ACTIONS.fetchArt()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
		navigator.geolocation.getCurrentPosition(function(position) {
			
			// define a method in ACTIONS that takes as input a lat and long
				// that method should call .set() on the store, updating the store's `currentPos`
				// property
			// invoke that method here, in this callback, passing in the lat and long from our position response object

			// instead of reading from a global variable (position), the position should have 
				// be part of the state of the app.
				// it should have a default value in the store. whatever its 'STORE' value is winds up on state 
				// of the top-level component. 

			// thus, position is something that should be passed down from state of MapView into the
				// `center` prop of the <Map />
		})
	},

	getInitialState : function() {
		console.log(STORE.data)
		return STORE.data
	},

	render : function() {
		return (
		  <div className="map-wrapper" >
		  <Banner />
			<Map center={position} zoom={13}>
				<TileLayer
				  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
				  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<AllMarkers artCollection={this.state.artColl}/>
			</Map>
		  </div>
		)
	}
})


export default MapView