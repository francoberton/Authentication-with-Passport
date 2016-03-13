

exports.userLogout = function(req, res, next) {
	req.logOut();
	res.send(200);
};

exports.loggedin = function(req, res, next) {
	res.send(req.isAuthenticated() ? req.user : '0');
};

exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('signin', {
      title: 'Sign-in'
    });
  } else {
    return res.redirect('/');
  }
};

exports.renderSignup = function(req, res, next) {
  if (!req.user) {
    res.render('signup', {
      title: 'Sign-up'
    });
  } else {
    return res.redirect('/');
  }
};
