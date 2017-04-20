import Backbone from 'backbone'

export var ArtCollection = Backbone.Collection.extend({
	url: '/api/arts',
	parse: function(apiResponse) {
		return apiResponse
	}
})

export var ArtModel = Backbone.Model.extend({
	url: '/api/arts',

	parse: function(apiResponse) {
		console.log(apiResponse)
		return apiResponse[0]
	}
})