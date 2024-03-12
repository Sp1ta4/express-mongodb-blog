const express = require('express');
const router = express.Router();
const blog = require('./blog.js');
const info = require('./info.js');
const contacts = require('./contacts.js');
const writePost = require('./writePost.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Комната читателя' });
});

router.use('/blog', blog);
router.use('/writePost', writePost);
router.use('/info', info);
router.use('/contacts', contacts);


module.exports = router;
