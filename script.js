function updateTaskCounter() {
  const totalTasks = document.querySelectorAll('#toDoLists li').length;
  document.getElementById('totalTasks').textContent = totalTasks;
}

document.getElementById('addButton').onclick = function() {
  const input = document.getElementById('toDoInput'); // Получаем текст задачи
  const newTask = input.value; // Сохраняем введенный текст

  if (newTask) { // Если поле ввода не пустое
      const li = document.createElement('li'); // Создаем новый элемент списка
      li.textContent = newTask; // Устанавливаем текст задачи

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete task';
      deleteButton.className = 'deleteButton';
      deleteButton.onclick = function(){
        li.remove();
      }
      li.appendChild(deleteButton);


      document.getElementById('toDoLists').appendChild(li); // Добавляем задачу в список
      input.value = ''; // Очищаем поле ввода
      updateTaskCounter();
  }
};