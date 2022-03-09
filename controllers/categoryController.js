"use strict"

const Category = require('../models/categoryModel')
const Thread = require('../models/threadModel')

module.exports = {
  category: async (req, res) => {
    const category = await Category.find().sort({ createdAt: 'desc' });
    res.render('category/category', { 
      category: category, 
      page: 'category'
    });
  },
  newCategory: (req, res) => {
    res.render('category/newCategory', { 
      category: new Category(),
      page: 'category'
    })
  },
  viewCategory: async (req, res) => {
    const category = await Category.findOne({ slug: req.params.slug });
    const thread = [
      { title: 'test thread 1'},
      { title: 'test thread 2'},
      { title: 'test thread 3'}
    ]
    if (category == null) res.redirect('/');
    res.render('thread/thread', {
      category: category,
      thread: thread,
      page: 'thread'
    });
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
      res.render('category/newCategory', { 
        category: category,
        page: 'category'
      })
    }
  },
  deleteCategory: async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/');
  },
  newThread: async (req, res) => {
    res.render('thread/newThread', { 
      category: new Thread(),
      page: 'thread'
    })
  },
  viewThread: async (req, res) => {
    const category = await Category.findOne({ slug: req.params.slug });
    const thread = [
      { title: 'test thread 1'},
      { title: 'test thread 2'},
      { title: 'test thread 3'}
    ]
    if (category == null) res.redirect('/');
    res.render('thread/thread', {
      category: category,
      thread: thread,
      page: 'thread'
    });
  },
}

