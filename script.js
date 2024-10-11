const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
let uncheckedModels = 0;

function newTodo() {
  const todoModel = document.createElement('li'); 
  todoModel.className = classNames.TODO_ITEM;

  const todoSentence = prompt("Enter any word or digit: ");  // Asking for task from user

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount);

  const text = document.createElement('span');
  text.className = classNames.TODO_TEXT;
  text.innerText = todoSentence ? todoSentence : `TODO ${todoCount + 1}`;  // Using the entered task or default text

  const removeButton = document.createElement('button');
  removeButton.className = classNames.TODO_DELETE;
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', function () { 
    list.removeChild(todoModel); 
    updateTodoCount();
    if (!checkbox.checked) {
      uncheckedModels++;
      updateUncheckedCount();
    }
  });

  todoModel.appendChild(checkbox); 
  todoModel.appendChild(text); 
  todoModel.appendChild(removeButton); 
  list.appendChild(todoModel);

  function updateTodoCount(change) {
    todoCount += change;
    itemCountSpan.innerText = todoCount;
  }

  function updateUncheckedCount(change = 0) {
    uncheckedCount += change || (this.checked ? -1 : 1);
    uncheckedCountSpan.innerText = uncheckedCount;
  }

  updateTodoCount();
  updateUncheckedCount();
}




