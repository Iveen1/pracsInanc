//const todolist = ['поесть', 'прийти на пару', 'приехать домой', 'поспать', 'погулять'];
const addBtn = document.getElementById('btn');

function readFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todolist') || '[]');
};

function writeToLocalStorage(array) {
    localStorage.setItem('todolist', JSON.stringify(array))
};

const input = document.getElementById('input')
const output = document.getElementById('output')

function render() {
    output.innerText = '';
    todolist.forEach((element) => {
        let liElem = document.createElement('li');
        liElem.innerText = element;
        output.appendChild(liElem);
    })
};

function addNewTask() {
    const value = input.value;
    todolist.push(value);
    writeToLocalStorage(todolist);
    render()
    // let liElem = document.createElement('li');
    // liElem.innerText = value;
    // console.log(liElem)
    // output.appendChild(liElem);
}

addBtn.addEventListener('click', addNewTask)

const todolist = readFromLocalStorage();
render()