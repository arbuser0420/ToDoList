// Функция для обновления счётчика задач
function updateTaskCounter() {
  // Получаем количество элементов списка задач
  const totalTasks = document.querySelectorAll('#toDoLists li').length;
  // Обновляем текст счётчика задач
  document.getElementById('totalTasks').textContent = totalTasks;
}

// Обработчик для кнопки "Добавить задачу"
document.getElementById('addButton').onclick = function() {
  // Получаем текстовое поле, куда пользователь вводит задачу
  const input = document.getElementById('toDoInput'); 
  // Сохраняем введённый текст задачи
  const newTask = input.value;

  // Проверяем, что поле ввода не пустое
  if (newTask.trim() === "") {
    alert("Task can't be empty!");
    return;
  }

  // Создаём новый элемент списка (новую задачу)
  const li = document.createElement('li');
  // Устанавливаем текст задачи в элемент списка
  li.textContent = newTask;

  // Добавляем класс для анимации появления
  li.classList.add('added');

  // Создаём кнопку для удаления задачи
  const deleteButton = document.createElement('button');
  // Устанавливаем текст для кнопки удаления
  deleteButton.textContent = 'Delete task';
  // Присваиваем кнопке класс для стилизации
  deleteButton.className = 'deleteButton';
  
  // Добавляем обработчик для удаления задачи при нажатии на кнопку
  deleteButton.onclick = function() {
    // Удаляем задачу (элемент списка)
    li.classList.add('removed');
    setTimeout(function() {
      li.remove();
      // Обновляем счётчик задач после удаления
      updateTaskCounter();
    }, 500); // Ожидаем завершения анимации
  };

  // Добавляем кнопку удаления внутрь элемента задачи
  li.appendChild(deleteButton);
  
  // Добавляем задачу (элемент списка) в список задач
  document.getElementById('toDoLists').appendChild(li);
  
  // Очищаем поле ввода после добавления задачи
  input.value = '';
  
  // Обновляем счётчик задач после добавления новой задачи
  updateTaskCounter();
};
