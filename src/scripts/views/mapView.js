import React from 'react'
// import { render } from 'react-dom';
import ReactDOM from 'react-dom'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

console.log(Map)
const position = [29.735132, -95.392806]

var MapView = React.createClass({
	render : function() {
		return (
		  <Map center={position} zoom={13}>
		    <TileLayer
		      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
		      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    />
		    <Marker position={position}>
		      <Popup>
		        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
		      </Popup>
		    </Marker>
		  </Map>
		)
	}
})


export default MapView