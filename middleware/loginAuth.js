var jwt = require('jsonwebtoken');

var loginAuth = function(req,res,next) 
{
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token) 
	{
   
        jwt.verify(token, global.config.jwt_secret, function(err, decoded) 
        {
            if (err) 
            { 
                return res.json({status:'error', statusCode:401, data:err.toString()});
            }
            
            req.decoded = decoded;
            
            next(); //no error, proceed
        });

    } 
    else 
    {
        return res.json({status:'error', statusCode:403, data:'Missing Token'});
    }
}

module.exports = loginAuth;