'use strict';

document.addEventListener('dragover', function(e){
    e.preventDefault();
})

const resetModals = () => {
    for (let el of document.getElementsByClassName('modal')){
        el.style.display = 'none';
    }
}

const toggleModal = (modal_id) => {
    const modal = document.getElementById(modal_id)
    const displayState = modal.style.display;
    resetModals();
    if (displayState === 'none') {
        modal.style.display = 'block';
    } else {
        resetModals();
    }
}

for (let el of document.getElementsByClassName('modal_toggle')) {
    if (el.id === 'help_btn' || el.id === 'ok_btn'){
        el.addEventListener('click', e => {
            e.preventDefault();
            toggleModal('help_modal');
        });
    } else {
        el.addEventListener('click', e => {
            e.preventDefault();
            toggleModal('new_modal');
        });
    }
}

let element_count = 1;
const createItemElement = (text) => {
    const element = document.createElement('div');
    const element_text = document.createTextNode(text);
    element.appendChild(element_text);
    element.className = 'list_item';
    element.id = `item-${element_count}`
    element.draggable = 'true';

    const delete_btn = document.createElement('button');
    const btn_text = document.createTextNode('🗑');
    delete_btn.appendChild(btn_text);
    element.appendChild(delete_btn)

    element.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('text', e.target.id);
    })
    delete_btn.addEventListener('click', function(e) {
        this.parentElement.remove();
    })
    element_count++;
    return element;
}


document.getElementById('todo_form').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('todo_text').value;
    document.getElementById('todo').appendChild(createItemElement(text));
    toggleModal('new_modal')
    this.reset();
});

for(let dropcolumn of document.getElementsByClassName('dropcolumn')){
    dropcolumn.addEventListener('drop', e => {
        const data = e.dataTransfer.getData('text')
        try {
            e.target.appendChild(document.getElementById(data));
        } catch (error) {
            return
        }
    });
}