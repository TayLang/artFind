import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import MapView from './views/mapView.js'
// api-key: AIzaSyC4jmL01l8XKAe5weJo-67K85qPYzhwtLg

const app = function() {
  var ArtRouter = Backbone.Router.extend({
  	routes: {
  		"main" : "handleMain",
  		"*splat" : "redirect"
  	},

  	handleMain: function(){
  		ReactDOM.render(<MapView />, document.querySelector('.container'))
  	},

  	redirect: function(){
  		location.hash = "main"
  	}
  })
  new ArtRouter
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..