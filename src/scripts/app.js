import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import MapView from './views/mapView.js'
import WelcomeView from './views/welcomeView.js'
import DetailView from './views/detailView.js'
import ListView from './views/listView.js'
// api-key: AIzaSyC4jmL01l8XKAe5weJo-67K85qPYzhwtLg
//streetview api: AIzaSyDwT8l8c7TN5wvYY8TgOGhvHYTDjRKO7vc

const app = function() {
  var ArtRouter = Backbone.Router.extend({
  	routes: {
      "welcome" : "handleWelcome",
  		"main" : "handleMain",
      "detail/:_id" : "handleDetail",
      "list" : "handleList",
      "*splat" : "redirect",

  	},

    handleWelcome: function(){
      ReactDOM.render(<WelcomeView />, document.querySelector('.container'))
    },

  	handleMain: function(){
  		ReactDOM.render(<MapView />, document.querySelector('.container'))
  	},

    handleDetail: function(id){
      ReactDOM.render(<DetailView artID={id} />, document.querySelector('.container'))
    },

    handleList: function(){
      ReactDOM.render(<ListView />, document.querySelector('.container'))
    },

  	redirect: function(){
  		location.hash = "welcome"
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