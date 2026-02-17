const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer');

addBtn.addEventListener('click', () => {
  if (inputBox.value.trim() === '') {
    alert('You must add a task.');
  } else {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerText = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveTasks();
})

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    e.target.classList.toggle('checked');
    saveTasks();
  } else if (e.target.tagName.toLowerCase() === 'span') {
    e.target.parentElement.remove();
    saveTasks();
  }
})

function saveTasks() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();