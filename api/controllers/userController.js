var userService = require('../services/userService');

var user = {

	login : function(req, res)
	{
		var username = req.body.username;
		var password = req.body.password;

		// console.log(username, password, req.method);

		userService.userAuthentication(username, password, function(response)
		{				
			return res.json(response);
		});
	
	},

	saveUser : function(req, res)
	{
		var user = {
			username : req.body.username,
			password : req.body.password,
			type : req.body.type,
		};
		
		userService.saveUser(user, function(response)
		{
			/*if(response.statusCode !== 200)
			{
				return res.render('error', {error:response.data});
			}*/

			return res.json(response);
		});
	},


	getUsers : function(req, res)
	{
		userService.getUsers(function(response)
		{	
			return res.json(response);
		});
	},



};

module.exports = user;