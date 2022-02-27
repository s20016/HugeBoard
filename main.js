"use strict";

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const categoryRouter = require('./routes/categoryRouter');
const port = process.env.PORT || 3000;
const app = express();

// DB
// mongoose.connect('')

// EJS Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

app.get('/', (req, res) => {
  const category = [{
    title: 'Category Title 1',
    createdAt: new Date(),
    description: 'Cateogory Description'
  },
  {
    title: 'Category Title 2',
    createdAt: new Date(),
    description: 'Cateogory Description'
  }]
  res.render('category', { categories: category });
})

// Routes
app.use('/thread', categoryRouter);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
})
