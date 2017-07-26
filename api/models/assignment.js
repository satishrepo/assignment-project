var mongoose = require('mongoose');


var assignmentSchema = new mongoose.Schema({

	created_for : [{type : mongoose.Schema.Types.ObjectId, ref:'user'}], // guest ref
	created_at : {type: Date, default: Date.now},
	title: {type: String, default: ''},
	content: {type: String, default:''},
	total_pages : {type: Number, default:1},
	attended_by : [{type : mongoose.Schema.Types.ObjectId, ref:'user'}], // writer ref
	updated_at : {type: Date, default: Date.now},
	completed : {type: Boolean, default: false},
	requirement : {
		title : {type: String, default: ''},
		description : {type: String, default: ''},
		duration :  {type: Number, default:1},
	},	
	
});


mongoose.model('assignment', assignmentSchema);
