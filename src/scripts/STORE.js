import Backbone from 'backbone'
import {ArtModel} from './models/artModels.js'

var STORE = Object.assign({}, Backbone.Events, {
	// dataType : "jsonp"
	data: {
		artColl : [],
		artMod: new ArtModel(),
		currentPos : [],
	
	},
	set: function(obj) {
		this.data = Object.assign(this.data, obj)
		this.trigger('dataUpdated')
	},
	get: function(attribute) {
		return this.data[attribute]
	}
})

export default STORE