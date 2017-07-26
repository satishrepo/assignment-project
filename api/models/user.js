var mongoose = require('mongoose');

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;


var userSchema = new mongoose.Schema(
{
	username : { type: String, unique: true, lowercase: true },	
	password : { type : String },
	type : { type : String, default:'guest'}, // guest, writer
});



userSchema.pre('save', function(next) 
{
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, next) 
{
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) 
    {
        if (err) return next(err);
        next(null, isMatch);
    });
};




mongoose.model('user', userSchema);

