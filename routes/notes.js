var express = require('express');
var router = express.Router();
var fs = require('fs'); //filesystem
var id;

const dataPath = "./data/notes.json";

/* GET all Notes. */
router.get('/', function(req, res, next) {

  fs.readFile(dataPath, (err,data) =>{
      if(err) {
          throw err;
      }

      res.send(JSON.parse(data));
  });
});

//POST a new Note
router.post('/', function(req, res, next) {

    var notesdata; 

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        notesdata = JSON.parse(data);
        var newNotesId = Object.keys(notesdata).length + 1;
        notesdata[newNotesId] = JSON.parse(req.body.data);
        
        console.log(notesdata);
        fs.writeFile(dataPath, JSON.stringify(notesdata), err => {
            if (err) {
              console.error(err)
              return
            }
            res.status(200).send("new Note added!");
        })
    });
});

router.put('/', function(req, res, next) {

    var notesdata; 

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        notesdata = JSON.parse(data);
        notesdata[req.body.id] = JSON.parse(req.body.data);
        
        console.log(notesdata);
        fs.writeFile(dataPath, JSON.stringify(notesdata), err => {
            if (err) {
              console.error(err)
              return
            }
            res.status(200).send("Note updated!");
        })
    });
});

router.delete('/', function(req, res, next) {

    var notesdata; 
    var notesdelete;
    var id= req.body.id;

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        notesdata = JSON.parse(data);
        notesdata[req.body.id] = notesdelete;
        
        console.log(notesdata);
        fs.writeFile(dataPath, JSON.stringify(notesdata), err => {
            if (err) {
              console.error(err)
              return
            }
            res.status(200).send("Note deleted!");
        })
    });
});

module.exports = router;