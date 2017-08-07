var express = require('express');
var router = express.Router();

var loginAuth = require('../middleware/loginAuth');

var eatappController = require('../api/controllers/eatappController');



/**************** API Routing  ******************/

router.get('/test',  eatappController.getAllRestorents);




/********************** API Routing END ******************/



router.get('*', function(req, res)
{
	res.set({
	  'Content-Type': 'text/plain',
	  'Content-Length': '123',
	  'ETag': '12345'
	})

	res.render('nopage');
});


module.exports = router;


