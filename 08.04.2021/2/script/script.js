let result;
const postsElem = document.getElementById("posts");
const inputElem = document.getElementById("input")
const btnElem = document.getElementById("btn");



const render = (json)=>{
    h1ELem = document.getElementById("h1");
    pElem = document.getElementById("p");
    h1ELem.innerText = json.title;
    pElem.innerText = json.body;


    // const divELem = document.createElement("div");
    // const h1ELem = document.createElement("h1");
    // const pELem = document.createElement("p");
    // h1ELem.innerText = json.title;
    // pELem.innerText = json.body;
    // divELem.appendChild(h1ELem);
    // divELem.appendChild(pELem);
    // postsElem.appendChild(divELem);
}

const getPost = ()=>{
    postId = inputElem.value;
    fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(
            response => response.json(),
            e=>console.log(e)
        ).then(
            json => render(json),
            e=>console.log(e)
        );
}
btnElem.addEventListener('click', getPost);