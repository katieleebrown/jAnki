const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req, res) => {
        console.log(req.user)
        const date = new Date().toLocaleDateString()
        console.log(date)
        try {
            const todoItems = await Todo.find({ userId: req.user.id })
            const totalItems = await Todo.countDocuments({ userId: req.user.id })
            const completedItems = await Todo.countDocuments({ userId: req.user.id, dateCompleted: date })
            const itemsLeft = totalItems - completedItems
            res.render('todos.ejs', { todos: todoItems, left: itemsLeft, user: req.user, todaysDate: date })
        } catch (err) {
            console.log(err)
        }
    },
    getRandom: async (req, res) => {
        console.log(req.user)
        try {
            const randoItem = await Math.random() * Todo.length
            const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
            res.render('todos.ejs', { todos: randoItem, left: itemsLeft, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createTodo: async (req, res) => {
        try {
            await Todo.create({ cardFront: req.body.cardFront, cardBack: req.body.cardBack, completed: false, userId: req.user.id })
            console.log('Todo has been added!')
            res.redirect('/todos')
        } catch (err) {
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
        const date = new Date().toLocaleDateString()
        console.log(date)
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
                dateCompleted: date,
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (err) {
            console.log(err)
        }
    },
    markIncomplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
                dateCompleted: ''
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch (err) {
            console.log(err)
        }
    },
    deleteTodo: async (req, res) => {
        console.log(req.body.todoIdFromJSFile)
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}    