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
  dateCompleted: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
