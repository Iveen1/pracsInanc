let result;
const postsElem = document.getElementById("posts");
const btnLeftElem = document.getElementById("btnL");
const btnRightElem = document.getElementById("btnR");
let id = 1;


const render = (json)=>{
    h1ELem = document.getElementById("h1");
    pElem = document.getElementById("p");
    h1ELem.innerText = json.title;
    pElem.innerText = json.body;
}

const getPost = ()=>{
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(
            response => response.json(),
            e=>console.log(e)
        ).then(
            json => render(json),
            e=>console.log(e)
        );
}
getPost();

btnLeftElem.addEventListener('click', () => {
    if (id-1>=1){
        id -= 1;
        getPost()
    } 
});
btnRightElem.addEventListener('click', () => {
    id += 1;
    getPost()
});