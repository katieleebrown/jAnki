const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const backOfCard = document.querySelector('#back')
const random = document.querySelector('#random')
const card = document.querySelector('#card')

document.querySelector('#hideBack').addEventListener('click', hideBack)
document.querySelector('#showRandom').addEventListener('click', showRandom)
document.querySelector('#all').addEventListener('click', showAll)

function hideBack() {
    front.classList.add('hidden')
    back.classList.toggle('hidden')
}

function showRandom() {
    let dataIds = []

    document.querySelectorAll('.cardData').forEach(cardBlock => {
        dataIds.push(cardBlock.getAttribute('id'))
    })
    console.log(`You have ${dataIds.length} card(s)`)

    document.querySelectorAll('.cardData').forEach(cardBlock => {
        cardBlock.classList.add('hidden')
    })
    let random = Math.floor(Math.random() * dataIds.length)
    document.getElementById(`${dataIds[random]}`).classList.remove('hidden')
}

function showAll() {
    document.querySelectorAll('.cardData').forEach(cardBlock => {
        cardBlock.classList.remove('hidden')
    })

}

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', getRandom)
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



//get random jAnki card
// function getRandom() {
//     var axios = require('axios');
//     let randomizer = Math.random() * 100;
//     var data = JSON.stringify({
//         "collection": "todos",
//         "database": "test",
//         "dataSource": "jAnki",
//         "projection": {
//             "_id": 1
//         }
//     });

//     var config = {
//         method: 'post',
//         url: 'https://data.mongodb-api.com/app/data-lsojj/endpoint/data/v1/action/findOne',
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Request-Headers': '*',
//           'api-key': 'PBQiyDEoHoIodeg0je17txAeISf65U5QKGOYNGEceTZ4yuP1ClNM9fxM8pdsHFKx',
//         },
//         data: data
//     };

//     axios(config)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

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

    // Toggles Button to show front/back
    let buttonSelect = document.querySelector(`a[data-id='${info}']`)
    if (buttonSelect.innerText.includes('Back')) {
        buttonSelect.innerText = 'Show Front'
    } else {
        buttonSelect.innerText = 'Show Back'
    }
}