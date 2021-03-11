const outputElem = document.getElementById('output');

const stage = {
    list: ['поесть', 'поспать', 'побегать'],
    addItem: function(item){ this.list.push(item)},
    removeItem: function(item){ this.list = this.list.filter(elem => elem !== item)},
    render: function() {
        this.list.forEach(elem => {
            const divElem = document.createElement('div');
            const closeElem = document.createElement('div');
            const header = document.createElement('h2');
            header.innerText = elem;
            divElem.classList.add('item');
            closeElem.classList.add('close');
            closeElem.innerText = "✖";
            divElem.appendChild(closeElem);
            divElem.appendChild(header);
            outputElem.appendChild(divElem);

            closeElem.addEventListener('click', event=>event.target.parentElement.remove());
        })
    }
}

stage.render();