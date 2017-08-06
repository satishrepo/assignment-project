var request = require('request');
var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

var app = require('../app');


chai.use(chaiHttp);



/*it('user list', function()
{
	request('http://localhost:8080/assignment/all',function(err, response, body)
	{
		console.log(err, response, body);
		expect(body.statusCode).to.equal(300);
	})
});*/


describe('Test Combo', function() 
{
    it('User Register', function(done) 
    {
        var userObj = {
            username : '123',
            password : '123',
            type: 'writer'
        };

        chai
        .request(app) 
        .post('/user/register')
        .send(userObj)
        .end(function(err, res, body)
        {
            expect(res.body.statusCode).to.equal(200);
            done();            
        })
    });


    it('User Login', function(done) 
    {            
        chai
        .request(app) 
        .post('/user/login')
        .send({username:userObj.username,password:userObj.password})
        .end(function(err, res, body)
        {
            console.log(res.body);
            expect(res.body.statusCode).to.equal(200);
            done();
        })
    });
    


    it('User list', function(done)
    {
        chai
        .request(app) 
        .get('/user/all')
        .end(function(err, res, body)
        {
            expect(res.body.statusCode).to.equal(200);
            done();
        })
    });


    it('Fetch Assignmets', function(done) 
    {            
        chai
        .request(app) 
        .get('/assignment/all')
        .end(function(err, res, body)
        {
            expect(res.body.statusCode).to.equal(200);
            done();
        })
    });

    
});

