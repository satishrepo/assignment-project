var mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

var logger = require('../../utils/logger');

var userModel = mongoose.model('user');


var user = {

	userAuthentication : function(username, password, next)
	{
		try
		{

			userModel.findOne({username:username},function(err, user)
			{	
				if(err)
				{	
					return next({status:'error', statusCode:500, data:err});
				}
			

				if(!user)
				{
					return next({status:'OK', statusCode:401, data:'Invalid User'});
				}

				user.comparePassword(password, function(err1, match) 
				{					
					
			        if(err)
					{	
						return next({status:'error', statusCode:500, data:err1});
					}
					if(match)
					{
						var token = jwt.sign(user, global.config.jwt_secret, 
						{
					        expiresIn: 7200 // expires in 5 hour
					    });
					    

						return next({status:'OK', statusCode:200, data:{user:user,token:token}});
					}

					return next({status:'OK', statusCode:401, data:'Invalid Credentials'});
			    });
				
				
			});	
		}
		catch(e)
		{			
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},

	saveUser : function(userObj, next)
	{
		if(typeof userObj !== 'object')
		{
			return next({status:'error', statusCode:500, data:'Please send valid user object'});
		}

		try
		{
			userModel.findOne({username:userObj.username}, function(er, user)
			{
				if(er)
				{
					return next({status:'error', statusCode:500, data:err});
				}

				if(user)
				{					
					return next({status:'OK', statusCode:403, data:'Username Already Exists.'});
				}

				userModel.create(userObj, function(err, result)
				{
					if(err)
					{
						return next({status:'error', statusCode:500, data:err});
					}

					return next({status:'OK', statusCode:200, data:result});
				});
			})
		}
		catch(e)
		{
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},

	getUsers : function(next)
	{
		try
		{
			userModel.find({}, function(er, users)
			{
				if(er)
				{
					return next({status:'error', statusCode:500, data:err});
				}

					return next({status:'OK', statusCode:200, data:users});
			})
		}
		catch(e)
		{
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},
	



}

module.exports = user;