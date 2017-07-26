var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/writer_db', {useMongoClient:true});


if(mongoose.connection.readyState == 0)
{
	console.log('Connection Error');
	return 
}
