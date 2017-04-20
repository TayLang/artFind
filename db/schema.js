const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})


 const artSchema = new mongoose.Schema({
	"Accession Number": { type: String },
	"Temp ID": { type: String },
	"Display Title": { type: String },
	"Display Artist": { type: String },
	"Creation Date": { type: String },
	"Media & Support": { type: String },
	"Credit Line": { type: String },
	"Current Location": { type: String },
	"LatLong": { type: String },
	"Specific Location": { type: String },
	"Department": { type: String },
	"Council District": { type: String }
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Art: mongoose.model('art', artSchema)
}
