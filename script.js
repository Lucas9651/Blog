const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

async function posts() {

    const responsePosts = await fetch("./posts.json")

    console.log(responsePosts)

    const dataPosts = await responsePosts.json()

    console.log(dataPosts)



    loadingElement.classList.add("hide")

    dataPosts.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")


        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href", "/comments.html")


        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)


    })
}

posts()






