const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/signin.html'));
});

router.post('/signin', function(request, response) {
	const username = request.body.username;
	const password = request.body.password;

		db.query('SELECT * FROM logs WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
					}
				// request.session.loggedin = true;
				// request.session.username = username;
        // request.session.password = password;
				// response.redirect('/');
			}

		});
	

});





module.exports = router;
