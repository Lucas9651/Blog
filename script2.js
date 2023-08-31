commentsContaire = document.querySelector("#comments-container")
const commentForm = document.querySelector("#comment-form")
const emailInput = document.querySelector("#email")
const bodyInput = document.querySelector("#body")

async function coment() {

    responseComent = await fetch("./comments.json")

    dataComent = await responseComent.json()

    console.log(dataComent)

  
    

    dataComent.map((coments) => {

        const email = document.createElement("h1")
        const body = document.createElement("p")

        email.innerText = coments.email
        body.innerText = coments.body

        commentsContaire.appendChild(email)
        commentsContaire.appendChild(body)
    })


}

commentForm.addEventListener("submit", (e) => {
e.preventDefault()

let comments = {
    email: emailInput.value,
    body: bodyInput.value,
}
console.log(comments)

})

coment()

