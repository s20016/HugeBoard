const express = require('express')
const router = express.Router()
const categoryControl = require('../controllers/categoryController')

router.get('/', categoryControl.category)
router.get('/new', categoryControl.newCategory)
router.get('/:slug', categoryControl.viewCategory)
router.post('/', categoryControl.postCategory)
router.delete('/:slug/new/:id', categoryControl.deleteCategory)

router.get('/:slug/new/thread', categoryControl.newThread)
router.get('/', categoryControl.viewThread)
router.post('/', categoryControl.postThread)

module.exports = router
