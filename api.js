const fs = require('fs')
const axios = require('axios')



const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlComments = 'https://jsonplaceholder.typicode.com/comments'

axios.get(urlPosts).then(response => {
    const posts = response.data

    fs.writeFile('posts.json', JSON.stringify(posts, null, 2), err => {
        if (err) throw new Error('algo está errado')
        console.log('tudo certo')

    })


})

axios.get(urlComments).then(response => {
    const comments = response.data

    fs.writeFile('comments.json', JSON.stringify(comments, null, 2), err => {
        if (err) throw new Error('algo está erado')
        console.log('tudo certo')
    })

})


