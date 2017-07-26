var assignmentService = require('../services/assignmentService');
// var async = require('async');
var fs = require('fs');
var path = require('path');
var pdf = require('html-pdf');


var assignment = {

	saveAssignment : function(req, res)
	{
		var assignment_id = req.body.assignment_id || null ;


		if(assignment_id == null )
		{			
			var assignmentData = {
				created_for: req.body.request_by,
				content: req.body.content,
				requirement : {
					title : req.body.title,
					description : req.body.description,
					duration :  req.body.duration,
				}
			};
		}
		else
		{			
			var assignmentData = {
				attended_by: req.body.attended_by,
				title: req.body.title,				
				content: req.body.content,
				completed: req.body.completed
			};
		}
		
		assignmentService.save(assignmentData, assignment_id, function(response)
		{
			return res.json(response);
		});
			
	},

	getAssignment : function(req, res)
	{
		var user_id = req.body.user_id;

		assignmentService.getAssignmentByUserid(user_id, function(response)
		{
			return res.json(response);
		});
	},

	getAllAssignments : function(req, res)
	{
		var user_id = req.body.user_id;

		assignmentService.getUnattendedAssignments(user_id, function(response)
		{
			return res.json(response);
		});
	},

	download : function(req, res)
	{
	
		var assignment_id = req.body.assignment_id;		



	    assignmentService.getAssignmentById(assignment_id, function(response)
	    {
	    	
			// var filePath = __dirname + '/../../assets/'+response.data[0].created_at+'.html';

			if(!response.data.length)
	    	{
				var d = 'No Content Found.';
	    	}
	    	else
	    	{
    			var d = response.data[0].content.replace(/\n/gi, '<br>');	
	    	}

	    	
    		/*fs.appendFile(filePath, d, function() 
			{
	            res.end();
	        });*/

			var options = {
				"border": {
			    "top": "2in",            // default is 0, units: mm, cm, in, px
			    "right": "1in",
			    "bottom": "2in",
			    "left": "1.5in"
			  },

			  "header": {
			    "height": "45mm",
			    "contents": '<div style="text-align: center;">'+response.data[0].title+'</div>'
			  },
			  "footer": {
			    "height": "28mm",
			    "contents": {
			      first: 'Cover page',
			      2: 'Second page', // Any page number is working. 1-based index
			      default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
			      last: 'Last Page'
			    }
			  },
			}

          	pdf.create(d, options).toStream(function(err, stream)
          	{
		        // console.log(stream);
		        stream.pipe(res);
		    });
			


			/*var filename = path.basename(filePath);
			
			res.setHeader('Content-disposition', 'attachment; filename=' + filename);
			res.setHeader('Content-type', 'text');

			var filestream = fs.createReadStream(filePath);
			filestream.pipe(res);
			fs.unlinkSync(filePath);*/
	
	    })
	    
	}

}



module.exports = assignment;