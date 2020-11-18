var express = require('express');
var router = express.Router();

/* GET all notes listing. */
router.get('/notes', function(req, res, next) {
  res.send('notes coming soon...');
});

module.exports = router;