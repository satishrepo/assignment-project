var Sequelize = require('sequelize');

const sequelize = new Sequelize('eat_app', 'root', '', {
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

    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false
    }
    
});



var eatapp = sequelize.define('user', {
	user_id: { type: Sequelize.STRING(100), primaryKey: true},
	fullname: {
	type: Sequelize.STRING
	},
	email: {
	type: Sequelize.STRING
	},
	password: {
	type: Sequelize.STRING
	},
	
});

module.exports = eatapp;