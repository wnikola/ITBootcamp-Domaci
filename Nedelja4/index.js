const addTaskButton = document.querySelector('#btn-add');
const taskListContainer = document.querySelector('#tasks-container');
const textBoxTitle = document.querySelector('#txt-title');
// console.log(taskListContainer);
// console.log(addTaskButton);

// console.log(addTaskButton.parentElement);
// console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click', btnAddClick);

textBoxTitle.addEventListener('keyup', txtKeyUp);

function btnAddClick(e) {
    // console.log(e);
    // console.log(e.target);
    e;
    addItem();
}

function txtKeyUp(e) {
    // console.log(e);
    if (e.keyCode == 13) {
        addItem();
    }
}

function addItem() {
    let txtBox = document.querySelector('#txt-title');
    // console.log(txtBox);
    
    let text = txtBox.value;
    if (text == '' || text.trim() == '') {
        alert('Task title can not be empty');
        return;
    }
    // console.log(text);
    
    let itemContainer = document.createElement('div');
    // console.log(itemContainer);
    itemContainer.className = 'task-item';
    
    // Zadatak 8

    const selUrgency = document.querySelector('#sel-urg');

    let urgency = selUrgency.value;
    let urgencyTxt = document.createElement('span');
    urgencyTxt.className = 'urgency-txt material-icons md-15';
    urgencyTxt.innerHTML = 'lens';

    if (urgency === 'low') {
        urgencyTxt.style.color = '#66ed4b';
    } else if (urgency === 'medium') {
        urgencyTxt.style.color = '#fcb64e';
    } else {
        urgencyTxt.style.color = '#fc4e4e';
    }

    let itemText = document.createElement('p');
    itemText.className = 'task-title';
    itemText.innerHTML = text;
    // console.log(itemText);

    let checkContainer = document.createElement('div');
    checkContainer.className = 'task-check';

    let removeBtn = document.createElement('button');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'X';

    let chkDone = document.createElement('input');
    chkDone.type = 'checkbox';
    chkDone.className = 'chk-state';
    chkDone.value = 'done';
    chkDone.addEventListener('change', handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);

    itemContainer.appendChild(urgencyTxt);
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);

    taskListContainer.appendChild(itemContainer);

    txtBox.value = '';
}

function removeTask(e) {
    // console.log(e);
    // console.log(e.target);
    if (!confirm("Are you sure?")) {
        return;
    }
    let btnToRemove = e.target;
    let divToRemove = btnToRemove.parentElement.parentElement;
    // console.log(divToRemove);
    divToRemove.remove();
}

function handleCheckChange(e) {
    // console.log(e);
    let chkBox = e.target;

    let checkContainer = chkBox.parentElement;
    let itemContainer = checkContainer.parentElement;

    if (chkBox.checked) {
        itemContainer.children[1].style.textDecoration = 'line-through';
    } else {
        itemContainer.children[1].style.textDecoration = 'none';
    }
}

// Domaci

// Zadatak 6

const remSel = document.querySelector('#rm-sel');

remSel.addEventListener('click', removeSelected);

function removeSelected() {
    let selected = Array.from(document.querySelectorAll('.chk-state')).filter(sel => sel.checked);
    if (selected.length === 0) {
        alert('Select some tasks first');
        return;
    } else {
        if (!confirm('Are you sure you want to remove selected tasks?')) {
            return;
        } else {
            selected.forEach(sel => {
                sel.parentElement.parentElement.remove();
            });
        }
    }
}

// Zadatak 7

const invSel = document.querySelector('#inv-sel');

invSel.addEventListener('click', invert)

function invert() {
    let check = document.querySelectorAll('.chk-state');
    check.forEach(el => {
        if (el.checked) {
            el.checked = false;
            el.parentElement.parentElement.children[1].style.textDecoration = 'none';
        } else {
            el.checked = true;
            el.parentElement.parentElement.children[1].style.textDecoration = 'line-through';
        }
    })
}
