var express = require('express');
var router = express.Router();

var loginAuth = require('../middleware/loginAuth');

var assignmentController = require('../api/controllers/assignmentController');


router.post('/saveassignment', loginAuth, assignmentController.saveAssignment);
router.post('/getassignments', loginAuth, assignmentController.getAssignment);
router.post('/getallassignments', loginAuth, assignmentController.getAllAssignments);
router.post('/download',  assignmentController.download);
router.get('/all',  assignmentController.getAssignments);


router.get('*', function(req, res)
{
	res.render('nopage');
});


module.exports = router;
