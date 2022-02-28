"use strict";

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const categoryRouter = require('./routes/categoryRouter');
const categoryModel = require('./models/categoryModel');

const port = process.env.PORT || 3000;
const app = express();

// DB
mongoose.connect("mongodb://localhost:27017/board", {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(() => {
    console.log("DB connected");
  }).catch(err => {
    console.log("DB could not connect", err);
  }
);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const category = await categoryModel.find().sort({ createdAt: 'desc' });
  res.render('category/category', { categories: category });
})

// Routes
app.use('/category', categoryRouter);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
})
