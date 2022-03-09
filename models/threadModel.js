const mongoose = require('mongoose');
const slugify = require('slugify')

const threadSchema= new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

threadSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, {
      lower: true, strict: true
    })  
  };

  next();
});

module.exports = mongoose.model('Thread', threadSchema);