var express = require('express');
var router = express.Router();
var fs = require('fs'); //filesystem
var id;
var errorCode;
var errorDescription;

const dataPath = "./data/notes.json";

var errorObject= `
{
    "code": "${errorCode}",
    "description": "${errorDescription}"
}
`;


/* GET all Notes. */
router.get('/', function(req, res, next) {

  fs.readFile(dataPath, (err,data) =>{
      if(err) {
          throw err;
      }

      res.send(JSON.parse(data));
  });
});

router.get('/:id', function(req, res, next) {

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        var id= req.params.id;
        var notesdata = JSON.parse(data);

        if(notesdata[id]!=null){
            res.send(notesdata[id]);
        }
        else{
            res.send(JSON.parse(`
            {
                "code": "404",
                "description": "Requested note does not exist"
            }`
            ));
        }
    });
  });


/* POST a new Note */
router.post('/', function(req, res, next) {

    var notesdata; 

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        notesdata = JSON.parse(data);
        var newNotesId = Object.keys(notesdata).length + 1;
        notesdata[newNotesId] = JSON.parse(req.body.data);
        notesdata[newNotesId].id= newNotesId;
        
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


/* EDIT a Note */
router.put('/:id', function(req, res, next) {

    var notesdata; 
    var id= req.params.id;

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        notesdata = JSON.parse(data);

        if(notesdata[id]!= null){
            notesdata[id] = JSON.parse(req.body.data);
            notesdata[id].id= id;
            
            console.log(notesdata);
            fs.writeFile(dataPath, JSON.stringify(notesdata), err => {
                if (err) {
                  console.error(err)
                  return
                }
                res.status(200).send("Note updated!");
            })
        }
        else{
            res.send(JSON.parse(`
            {
                "code": "404",
                "description": "Requested note does not exist"
            }`
            ));
        }

    });
});


/* DELETE a Note */
router.delete('/:id', function(req, res, next) {

    var notesdata; 
    var notesdelete;
    var id= req.params.id;

    fs.readFile(dataPath, (err,data) =>{
        if(err) {
            throw err;
        }
        notesdata = JSON.parse(data);
        

        if(notesdata[id]!=null){
            notesdata[id] = notesdelete;
        
            console.log(notesdata);
            fs.writeFile(dataPath, JSON.stringify(notesdata), err => {
                if (err) {
                console.error(err)
                return
                }
                res.status(200).send("Note deleted!");
                
            })
        }
        else{
            res.send(JSON.parse(`
            {
                "code": "404",
                "description": "Requested note does not exist"
            }`
            ));
        }
    });
});


module.exports = router;