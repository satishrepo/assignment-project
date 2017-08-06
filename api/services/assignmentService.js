var mongoose = require('mongoose');
var logger = require('../../utils/logger');

var assignmentModel = mongoose.model('assignment');

var assignment = {


	save : function(data, assignment_id, next)
	{
		if(typeof data !== 'object')
		{
			return next({status:'error', statusCode:500, data:'Please send valid object'});
		}

		try
		{	
			if(!assignment_id)
			{
				assignmentModel.create(data, function(err, result)
				{
					if(err)
					{
						return next({status:'error', statusCode:500, data:err});
					}

					return next({status:'OK', statusCode:200, data:result});
				});
			}		
			else
			{
				var query = {_id:assignment_id};
				options = { upsert: false };

				assignmentModel.findOneAndUpdate(query, data, options, function(err, result)
				{
					if(err)
					{
						return next({status:'error', statusCode:500, data:err});
					}

					return next({status:'OK', statusCode:200, data:result});
				});
			}
			
		}
		catch(e)
		{
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},

	getAssignmentByUserid : function(userid, next)
	{
		try
		{
			assignmentModel.find({created_for:userid})
			.populate('attended_by')			
			.exec(function(err, result)
			{
				if(err)
				{	
					return next({status:'error', statusCode:500, data:err});
				}
				return next({status:'OK', statusCode:200, data:result});
			});	
		}
		catch(e)
		{			
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},


	getUnattendedAssignments : function(user_id, next)
	{
		try
		{
			// assignmentModel.find({$and:[{attended_by:[]},{completed:false}]})
			assignmentModel.find({$or:[{attended_by:user_id},{attended_by:[]}]})
			.populate('created_for')			
			.exec(function(err, result)
			{
				if(err)
				{	
					return next({status:'error', statusCode:500, data:err});
				}
				return next({status:'OK', statusCode:200, data:result});
			});	
		}
		catch(e)
		{			
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},

	getAssignmentById : function(assignment_id, next)
	{
		try
		{
			assignmentModel.find({_id:assignment_id}, function(err, result)
			{
				if(err)
				{	
					return next({status:'error', statusCode:500, data:err});
				}
				return next({status:'OK', statusCode:200, data:result});
			});	
		}
		catch(e)
		{			
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	},

	getAllAssignments : function(next)
	{
		try
		{
			assignmentModel.find({}, function(err, result)
			{
				if(err)
				{	
					return next({status:'error', statusCode:500, data:err});
				}
				return next({status:'OK', statusCode:200, data:result});
			});	
		}
		catch(e)
		{			
			return next({status:'error', statusCode:500, data:e.toString()});
		}
	}

	
}

module.exports = assignment;