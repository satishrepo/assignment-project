var mongoose = require('mongoose');

var Sequelize = require('sequelize');

// const sequelize = new Sequelize('eat_app', 'root', '');

/*const sequelize = new Sequelize('eat_app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  	dialectOptions: {
  		// socketPath: "/var/run/mysqld/mysqld.sock"
        socketPath: "/opt/lampp/var/mysql/mysql.sock"
    },
    
});*/

// Or you can simply use a connection uri
//const sequelize = new Sequelize('mysql://root:root@localhost/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/writer_db', {useMongoClient:true});


if(mongoose.connection.readyState == 0)
{
	console.log('Connection Error');
	return 
}



