const express = require('express');
const router = express.Router();
const categoryControl = require('../controllers/categoryController')

router.get('/new', categoryControl.newCategory);
router.get('/new/:slug', categoryControl.viewCategory)
router.post('/', categoryControl.postCategory);
router.delete('/new/:id', categoryControl.deleteCategory);

module.exports = router;
