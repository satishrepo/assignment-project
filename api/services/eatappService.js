var Sequelize = require('sequelize');
var eatappModels = require('../models/eatappModels');

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
        timestamps: false,
    	underscore:true
    }
    
});




const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.menu = require('../models/menu_sq.js')(sequelize, Sequelize);  
db.submenu = require('../models/sub_menu_sq.js')(sequelize, Sequelize);  
db.variant = require('../models/variant_sq.js')(sequelize, Sequelize);  



db.variant.belongsTo(db.submenu, {foreignKey: 'submenu_id'});  
db.submenu.hasMany(db.variant, {foreignKey: 'submenu_id'});  

db.submenu.belongsTo(db.menu, {foreignKey: 'menu_id'});  
db.menu.hasMany(db.submenu, {foreignKey: 'menu_id'});



var eatapp = {

	getAllResto : function(next)
	{
		eatappModels.findAll().then(user => {			
			return next(user);			
		}).catch(err => {
			return next(err);
		})
	},

	getAllCusines : function(next)
	{
		var query = `SELECT a.menu_id, a.menu, b.id AS sub_id, b.submenu_title, b.price, 
					b.food_status, b.description, b.variant_title, b.currency, c.id AS var_id, 
					c.options, c.price as var_price
					FROM menu a
					INNER JOIN submenu b ON b.restaurant_id = a.restaurant_id
					INNER JOIN variant_data c ON b.id = c.submenu_id
					WHERE a.restaurant_id = 1
					ORDER BY a.menu_id`;

		sequelize.query(query).spread((result, meta) => {

			return next(result);

		}).catch(err => {

			return next(err);

		})
	},


	formatData : function(next)
	{
		db.menu.findAll({
	      include: [
	        {
	          model: db.submenu,
	          include: [
	            {
	              model: db.variant
	            }
	          ]
	        }
	      ]
	    }).then(menus => {
	      	const resObj = menus.map(menu => {

	        return Object.assign({},
	          	{
		            menu_id: menu.menu_id,
		            menu: menu.menu,
		            submenus : menu.submenus.map(smenu => {

		            	return Object.assign({},
		            	{
		            		sub_id : smenu.id,
		            		menu_id : smenu.menu_id,
			            	title : smenu.title,
			            	desc : smenu.description,
			            	variants : smenu.variant_data.map(variant => {

			            		return Object.assign({}, 
			            		{
				            		id : variant.id,
				            		sub_id : variant.submenu_id,
				            		options : variant.options,
				            		price : variant.price
			            		})

		            		})
		        		})

		            })

		        })
	    	})
      	return next(resObj);      
	    })
	}

	
};

module.exports = eatapp;