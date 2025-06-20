const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task.text, task.completed));
};

function addTask(text, completed = false) {
  if (text.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = text;
  if (completed) li.classList.add('completed');

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({ text: li.firstChild.textContent, completed: li.classList.contains('completed') });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addBtn.addEventListener('click', () => {
  addTask(input.value);
  input.value = '';
});
