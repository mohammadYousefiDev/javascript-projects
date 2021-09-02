if(localStorage.getItem('todos'))
  var todos = JSON.parse(localStorage.getItem('todos'));
else
  var todos = [];

createdTodos(todos);

function addTodo()
{
  
  var newTodo = document.getElementById('todoBox').value;

  var button = document.getElementById('todoBtn')

  if(button.getAttribute('data-mode') == 'edit'){
    todos[button.getAttribute('data-index')].title = newTodo;
    saveTodo(todos);
    button.removeAttribute('data-mode');
    button.removeAttribute('data-index');
    button.innerText = 'Add'
    return;
  }

  if(newTodo == ''){
    return;
  }
  
  todos.push({
    title : newTodo,
    done : 0
  });

  saveTodo(todos);
}

function saveTodo(todos)
{
  localStorage.setItem('todos', JSON.stringify(todos));
  createdTodos(todos);
  document.getElementById('todoBox').value = '';
}

function createdTodos(todos) {
  var todoResults = '';
  var doneResults = '';
  todos.forEach((el,i) => {
    if(el.done == 0)
    {
      todoResults += '\
      <article>\
        '+el.title+'\
        <button class="deleteBtn" onclick="deleteTodo('+i+')">&#10006;</button>\
        <button class="editBtn" onclick="editTodo('+i+')">&#9998;</button>\
        <button class="doneBtn" onclick="doneTodos('+i+')">&#10003;</button>\
      </article>\
      ';
    }else {
      doneResults += '\
      <article>\
        '+el.title+'\
        <button class="deleteBtn" onclick="deleteTodo('+i+')">&#10006;</button>\
        <button class="editBtn" onclick="editTodo('+i+')">&#9998;</button>\
        <button class="doneBtn" onclick="returnTodo('+i+')">&#10094;</button>\
      </article>\
      ';
    }
    
  });

  document.getElementById("todoResults").innerHTML = todoResults;
  document.getElementById("DoneResults").innerHTML = doneResults;
}

function deleteTodo(index) 
{
  todos.splice(index, 1)
  saveTodo(todos);
}

function doneTodos(index)
{
  todos.forEach((el,i) => {
    if(index == i){
      el.done = 1
    }
  });

  saveTodo(todos);
}

function returnTodo(index)
{
  todos.forEach((el,i) => {
    if(index == i){
      el.done = 0
    }
  });

  saveTodo(todos);
}

function editTodo(index) {
  todos.forEach((el,i) => {
    if(i == index){
      document.getElementById('todoBox').value = el.title;
      var button = document.getElementById('todoBtn')
      button.innerText = 'Edit';
      button.setAttribute('data-mode', 'edit')
      button.setAttribute('data-index', i)
    }
  });
  document.documentElement.scrollTop = 0;
}
