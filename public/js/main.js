const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const backOfCard = document.querySelector('#back')

document.querySelector('#hideBack').addEventListener('click', hideBack)

function hideBack() {
    front.classList.add('hidden')
    back.classList.toggle('hidden')
}

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})

//delete a jAnki card
async function deleteTodo() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

//mark off a jAnki card if you have it memorized
async function markComplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

//add a marked off jAnki card back to the deck if you didn't quite get it memorized
async function markIncomplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

// Show Back Button / Toggle Hidden
document.querySelectorAll('.displayButton').forEach(element => {
    element.addEventListener('click', showOther)
    console.log(`test ${element.getAttribute('data-id')}`)
})

function showOther(click) {

    let info = event.currentTarget.getAttribute('data-id')
    console.log(`click at data-id: ${info}`)
    document.querySelectorAll(`p[data-id='${info}']`).forEach(x => {
        x.classList.toggle('hidden')
    })
}
