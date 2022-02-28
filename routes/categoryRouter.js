const express = require('express');
const router = express.Router();
const categoryControl = require('../controllers/categoryController')

router.get('/new', categoryControl.newCategory);
router.get('/:slug', categoryControl.viewCategory)
router.post('/', categoryControl.postCategory);
router.delete('/:slug/new/:id', categoryControl.deleteCategory);

module.exports = router;
