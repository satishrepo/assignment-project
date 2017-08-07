var eatappService = require('../services/eatappService');

var eatapp = {

	getAllRestorents : function(req, res)
	{		
		eatappService.formatData(function(result)
		{		
			return res.json(result);
		});
	}

}

module.exports = eatapp;