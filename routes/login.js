const express = require('express');
const router = express.Router();
const db = require('../db');

const mysql = require('mysql');






router.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/signin.html'));
});

router.post('/signin', function(request, response) {
	const username = request.body.username;
	const password = request.body.password;
	if (username && password) {
		db.query('SELECT * FROM logs WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

router.get('/', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});


module.exports = router;
