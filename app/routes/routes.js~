var users = require('../controllers/users.server.controller')
var index = require('../controllers/index.server.controller')
var homepage = require('../controllers/homepage.server.controller')

module.exports = function(app, passport) {
    
    // =====================================
    // INDEX  ==============================
    // =====================================

   app.route('/')
  	.get(index.renderIndex);

    // =====================================
    // HOME PAGE  ==========================
    // =====================================

   app.route('/homepage')
  	.get(homepage.renderHomepage);
      
    // =====================================
    // LOGOUT ==============================
    // =====================================
     app.route('/logout')
	// Logout User
	.get(users.userLogout);
    
    // =====================================
    // LOGGEDIN ============================
    // =====================================

    app.route('/loggedin')
	// check user authenticated
     	.get(users.loggedin);

    // =====================================
    // SIGNIN ==============================
    // =====================================
	
    app.route('/signin')
	 // show the signin form
	.get(users.renderSignin)
	 // process the signin form
   	.post(passport.authenticate('local-signin', {
        	successRedirect : '/loggedin', 
        	failureRedirect : '/signin', // redirect back to the signin page if there is an error
       	 	failureFlash : true // allow flash messages
    	}));
   
    // =====================================
    // SIGNUP ==============================
    // =====================================
 
    app.route('/signup')
	 // show the signup form
	.get(users.renderSignup)
	 // process the signup form
   	.post(passport.authenticate('local-signup', {
        	successRedirect : '/loggedin',
        	failureRedirect : '/signup', // redirect back to the signup page if there is an error
       	 	failureFlash : true // allow flash messages
    }));

};


