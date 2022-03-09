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
    const thread = await Thread.findOne({ slug: req.params.slug })
    console.log(category)
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
    const category = await Category.findOne({ slug: req.params.slug });
    res.render('thread/newThread', { 
      category: category,
      thread: new Thread(),
      page: 'thread'
    })
  },
  viewThread: async (req, res) => {
    const category = await Category.findOne({ slug: req.params.slug });
    const thread = await Thread.findOne({ slug: req.params.slug })
    const message = [
      { title: 'test message 1'},
      { title: 'test message 2'},
      { title: 'test message 3'}
    ]
    res.render('message/message', {
      category: category,
      thread: thread,
      message: message,
      page: ''
    });
  },
  postThread: async (req, res) => {
    let thread = new Thread({
      title: req.body.title,
    })
    try {
      thread = await thread.save();
      res.redirect(`/${thread.slug}`)
    } catch (e) {
      console.log(e)
      res.render('thread/newThread', { 
        thread: thread,
        page: 'thread'
      })
    }
  },
}

