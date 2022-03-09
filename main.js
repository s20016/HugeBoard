"use strict"

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const layouts = require("express-ejs-layouts")

const categoryRouter = require('./routes/categoryRouter')

const port = process.env.PORT || 3000
const app = express()

// DB
mongoose.connect("mongodb://localhost:27017/board", {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(() => {
    console.log("DB connected")
  }).catch(err => {
    console.log("DB could not connect", err)
  }
)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(layouts)

// Routes
app.use('/', categoryRouter)

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
