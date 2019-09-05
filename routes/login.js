const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/signin.html'));
});

router.post('/signin', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		db.query('SELECT * FROM logs WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
        //request.session.password = password;
				response.redirect('/');
			}
			
		});
	}

});





module.exports = router;
