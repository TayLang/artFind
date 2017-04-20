import {ArtCollection} from './models/artModels.js'
import {ArtModel} from './models/artModels.js'
import STORE from './STORE'

var ACTIONS = {
	fetchArt : function() {
		var artInstance = new ArtCollection()
		var promise = artInstance.fetch()
		promise.then(() => {
			STORE.set({
				artColl : artInstance
			})
		})
	},

	fetchOneArt : function(artid) {
		var artInstance = new ArtModel()
		var promise = artInstance.fetch({
			data:{
				_id:artid
			}
		})
		.then(() => {
			STORE.set({
				artMod : artInstance
			})
		})
	}
}

export default ACTIONS