const express = require('express');
const blogController = require('../controllers/blog-controller');
const router = express.Router();

router.get('/', blogController.getBlogPage);
router.get('/:id', blogController.getOnePostPage);

module.exports = router;
