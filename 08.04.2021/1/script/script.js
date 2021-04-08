let result;
const postsElem = document.getElementById("posts");

const render = (json)=>{
    const divELem = document.createElement("div");
    const h1ELem = document.createElement("h1");
    const pELem = document.createElement("p");
    h1ELem.innerText = json.title;
    pELem.innerText = json.body;
    divELem.appendChild(h1ELem);
    divELem.appendChild(pELem);
    postsElem.appendChild(divELem);
}

const getPost = (id)=>{
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(
            response => response.json(),
            e=>console.log(e)
        ).then(
            json => render(json),
            e=>console.log(e)
        );
}
