function addTask() {
  const input = document.querySelector('#texto-tarefa');
  const addButton = document.querySelector('#criar-tarefa');
  const parentList = document.querySelector('#lista-tarefas');

  addButton.addEventListener('click', function () {
    let task = document.createElement('li');
    task.innerText = input.value;

    parentList.appendChild(task);
    input.value = '';
  });
}

addTask();

function colorItem() {
  const list = document.querySelector('#lista-tarefas');

  list.addEventListener('click', function (event) {
    const listTask = list.children;

    for (let i = 0; i < listTask.length; i += 1) {
      listTask[i].style.backgroundColor = '#fbffe2';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

colorItem();

function taskCompleted() {
  const list = document.querySelector('#lista-tarefas');

  list.addEventListener('dblclick', function (event) {
    if (event.target.className == 'completed') {
      event.target.className = '';
      event.target.style.backgroundColor = '#fbffe2';
    } else {
      event.target.className = 'completed';
      event.target.style.backgroundColor = '#fbffe2';
    }
  });
}

taskCompleted();

function clearList() {
  const buttonClearList = document.querySelector('#apaga-tudo');
  const list = document.querySelector('#lista-tarefas');

  buttonClearList.addEventListener('click', function () {
    while (list.firstChild) {
      list.firstChild.remove();
    }
  });
}

clearList();

function clearCompleteds() {
  const buttonClearCompleted = document.querySelector('#remover-finalizados');
  const taskCompleted = document.getElementsByClassName('completed');

  buttonClearCompleted.addEventListener('click', function () {
    let taskCompletedSize = taskCompleted.length;

    for (let i = 0; i < taskCompletedSize; i += 1) {
      taskCompleted[0].parentElement.removeChild(taskCompleted[0]);
    }
  });
}

clearCompleteds();

function saveTask() {
  const buttonsaveTask = document.querySelector('#salvar-tarefas');
  const list = document.querySelector('#lista-tarefas');

  buttonsaveTask.addEventListener('click', function () {
    localStorage.clear();
    let taskList = list.children;

    for (let i = 0; i < taskList.length; i += 1) {
      let task = {
        text: taskList[i].innerText,
        class: taskList[i].className,
      };

      localStorage.setItem(JSON.stringify(i), JSON.stringify(task));
    }
  });
}

saveTask();

function itemUpDown() {
  const listItems = document.querySelector('#lista-tarefas').children;
  const buttonUp = document.querySelector('#mover-cima');
  const buttonDown = document.querySelector('#mover-baixo');

  buttonUp.addEventListener('click', function () {

    let selected = listItems[0];
    let foundSelected = false;

    for (item of listItems) {

      if (item.style.backgroundColor == 'rgb(128, 128, 128)') {
        selected = item;
        foundSelected = true;
      }
    }

    if (foundSelected == true && selected.previousSibling) {
      let previousSelectedText = selected.previousSibling.innerText;
      let previousSelectedClass = selected.previousSibling.className;
      let previousSelectedColor = selected.previousSibling.style.backgroundColor;

      selected.previousSibling.innerText = selected.innerText;
      selected.previousSibling.className = selected.className;
      selected.previousSibling.style.backgroundColor = selected.style.backgroundColor;

      selected.innerText = previousSelectedText;
      selected.className = previousSelectedClass;
      selected.style.backgroundColor = previousSelectedColor;
    }
  });

  buttonDown.addEventListener('click', function () {

    let selected = listItems[0];
    let foundSelected = false;

    for (item of listItems) {

      if (item.style.backgroundColor == 'rgb(128, 128, 128)') {
        selected = item;
        foundSelected = true;
      }
    }

    if (foundSelected == true && selected.nextElementSibling) {
      let nextSelectedText = selected.nextElementSibling.innerText;
      let nextSelectedClass = selected.nextElementSibling.className;
      let nextSelectedColor = selected.nextElementSibling.style.backgroundColor;

      selected.nextElementSibling.innerText = selected.innerText;
      selected.nextElementSibling.className = selected.className;
      selected.nextElementSibling.style.backgroundColor = selected.style.backgroundColor;

      selected.innerText = nextSelectedText;
      selected.className = nextSelectedClass;
      selected.style.backgroundColor = nextSelectedColor;
    }
  });
}

itemUpDown();

function removeSelected () {
  const listItems = document.querySelector('#lista-tarefas').children;
  const buttonDelete = document.querySelector('#remover-selecionado');

  buttonDelete.addEventListener('click', function() {
    for (item of listItems) {

      if (item.style.backgroundColor == 'rgb(128, 128, 128)') {
        item.remove();
      }
    }
  });
}

removeSelected();

window.onload = function () {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      let taskText = JSON.parse(localStorage.getItem(i));

      const parentList = document.querySelector('#lista-tarefas');
      let task = document.createElement('li');

      task.innerText = taskText.text;
      task.className = taskText.class;

      parentList.appendChild(task);
    }
  }
};
