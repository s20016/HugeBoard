const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');

router.get('/new', (req, res) => {
  res.render('category/new', { category: new Category() })
});

router.get('/new/:slug', async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug });
  if (category == null) res.redirect('/');
  res.render('thread/thread', { thread: category });
})

router.post('/', async (req, res) => {
  let category = new Category({
    title: req.body.title,
    description: req.body.description
  })
  try {
    category = await category.save();
    res.redirect(`/category/new/${category.slug}`)
  } catch (e) {
    console.log(e)
    res.render('category/new', { category: category })
  }
});

router.delete('/new/:id', async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
