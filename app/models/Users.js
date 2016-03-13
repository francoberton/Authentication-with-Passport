var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userSchema = new mongoose.Schema({
	local	:{ 
  	   name: String,
  	   surname: String,
  	   email: String,
  	   username: String,
  	   password: String,
	}
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('Users', userSchema);
