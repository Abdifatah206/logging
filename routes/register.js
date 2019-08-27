const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/all', function(req, res, next) {
  db.query("select * from logs", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.post('/signup', function(req,res,next){
  const query = "INSERT INTO logs (ID, email, username, password) "
    +"VALUES ( ?, ?, ?, ?);"
  const queryParams = [
    req.body.ID,
    req.body.email,
    req.body.username,
    req.body.password

  ];

  db.query(query, queryParams, (error, result, fields) => {
    if (error){
      res.status(500).send(error);
    }
    res.status(201).send('RECORD INSERTED......');
  });
});



module.exports = router;
