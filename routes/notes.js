const { json } = require('express');
var express = require('express');
var router = express.Router();
var fs = require('fs'); //File System

const dataPath = "./data/notes.json";

/* GET all notes listing. */
router.get('/', function(req, res, next) {
  fs.readFile(dataPath, (err,data) => {
    if(err) {
        throw err;
    }
    res.send(JSON.parse(data));
  }) 
});

/* POST new note */
router.post('/', function(req, res, next) {
    fs.appendFile(dataPath,req.body.data, (err) =>{
        if(err) {
            throw err;
        }

        res.send("Notes added!");
    })

  });

module.exports = router;