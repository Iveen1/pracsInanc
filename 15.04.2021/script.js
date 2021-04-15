const postsElem = document.getElementById("posts");
const btnLeftElem = document.getElementById("btnL");
const btnRightElem = document.getElementById("btnR");
let id = 1;


const render = (json)=>{
    console.log(json);
    if (json["data"].length < 1){
        let h1 = document.createElement("h1");
        h1.setAttribute("id", "not_exists");
        h1.innerText = `Страницы №${id} не существует`;
        postsElem.appendChild(h1);
    }else{
        for (var i = 0; i < json["data"].length; i++){
            let divElem = document.createElement("div");
            divElem.setAttribute("id", "card");
    
            let h1 = document.createElement("h1");
            h1.innerText = json["data"][i]["first_name"] + " " + json["data"][i]["last_name"];
    
            let img = document.createElement("img");
            img.setAttribute("src", json["data"][i]["avatar"]);
    
            let email = document.createElement("p");
            email.innerText = json["data"][i]["email"];
    
            divElem.appendChild(img);
            divElem.appendChild(h1);
            divElem.appendChild(email);
            postsElem.appendChild(divElem);
        }
    }
}

const getPost = ()=>{
    fetch(`https://reqres.in/api/users?page=${id}`)
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
        document.querySelectorAll("#card").forEach(element => {
            element.remove()
        });
        document.querySelectorAll("#not_exists").forEach(element => {
            element.remove()
        });
        getPost()
    } 
});
btnRightElem.addEventListener('click', () => {
    id += 1;
    document.querySelectorAll("#card").forEach(element => {
        element.remove()
    });
    document.querySelectorAll("#not_exists").forEach(element => {
        element.remove()
    });
    getPost()
});