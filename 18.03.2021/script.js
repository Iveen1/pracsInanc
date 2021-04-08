const btn = document.getElementById('btn')
const outputElem = document.getElementById('output');
const input_txt = document.getElementById('input_txt');
const input_link = document.getElementById('input_link');

const stage = {
    list: [['test1', 'https://image.flaticon.com/icons/png/512/123/123164.png'], ['test2', 'https://img.icons8.com/ios/452/face.png']],
    addItem: function(item){ this.list.push(item); this.render()},
    removeItem: function(item){ this.list = this.list.filter(elem => elem !== item)},
    render: function() {
        if (document.getElementById("item") !== null){
            document.querySelectorAll('.item').forEach(function(a){
                a.remove()
            });
        }
        this.list.forEach(elem => {
            const divElem = document.createElement('div');
            const closeElem = document.createElement('div');
            const header = document.createElement('h2');
            header.setAttribute('id', 'text');

            let imgElem = document.createElement('img');
            let value = elem[1];
            imgElem.src=value;
            divElem.appendChild(imgElem);

            header.innerText = elem[0];

            divElem.classList.add('item');
            divElem.setAttribute('id', 'item');

            closeElem.classList.add('close');
            closeElem.innerText = "✖";
            divElem.appendChild(closeElem);
            divElem.appendChild(header);
            outputElem.appendChild(divElem);
            function remove(event){
                console.log(event.target.parentElement.childNodes[2].firstChild);
                event.target.parentElement.remove();
            }
            closeElem.addEventListener('click', event=>remove(event));
        })
    }
}

function add(){
    stage.addItem(([input_txt.value, input_link.value]));
}
stage.render()
btn.addEventListener('click', add);