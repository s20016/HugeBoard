"use strict"

const Category = require("../models/categoryModel.js")

module.exports = {
  newCategory: (req, res) => {
    res.render('category/newCategory', { category: new Category() })
  },
  viewCategory: async (req, res) => {
    const category = await Category.findOne({ slug: req.params.slug });
    if (category == null) res.redirect('/');
    res.render('thread/thread', { thread: category });
  },
  postCategory: async (req, res) => {
    let category = new Category({
      title: req.body.title,
      description: req.body.description
    })
    try {
      category = await category.save();
      res.redirect(`/${category.slug}`)
    } catch (e) {
      console.log(e)
      res.render('category/newCategory', { category: category })
    }
  },
  deleteCategory: async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/');
  }
}

