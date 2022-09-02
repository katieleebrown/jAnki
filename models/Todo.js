const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  cardFront: {
    type: String,
    required: true,
  },
  cardBack: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
