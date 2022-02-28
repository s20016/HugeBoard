const mongoose = require('mongoose');
const slugify = require('slugify')

const threadSchema = new mongoose.Schema({
  threadTitle: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

categorySchema.pre('validate', function(next) {
  if (this.threadTitle) {
    this.slug = slugify(this.threadTitle, {
      lower: true, strict: true
    })  
  };

  next();
});

module.exports = mongoose.model('Thread', threadSchema);