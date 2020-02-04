import Task from './Task';
import getAllTasks from './getAllTasks';
import getPinnedTasks from './getPinnedTasks';
import filterByTitle from './filter';

const tasks = [];

// Elements
const $form = document.getElementById('form');
const $pinnedTasks = document.getElementById('tasks-pinned');
const $allTasks = document.getElementById('all-tasks');
const $input = document.getElementById('field');
const $error = document.getElementById('error');
const $noPinned = document.getElementById('no-pinned');
const $noFound = document.getElementById('no-found');


// Init
tasks.push(
  new Task('Купить велосипед'),
  new Task('Тюнинговать велосипед', true),
  new Task('Продать велосипед'),
  new Task('Поесть'),
  new Task('Сходить на пробежку'),
);

$pinnedTasks.innerHTML = getPinnedTasks(tasks);
$allTasks.innerHTML = getAllTasks(tasks);

// Events
const addPinEvent = () => {
  for (const pin of [...document.getElementsByClassName('pinned')]) {
    pin.addEventListener('click', (event) => {
      const task = tasks.find((item) => item.title === event.target.previousSibling.textContent);
      task.isPinned = !task.isPinned;

      const pinnedTasks = getPinnedTasks(tasks);
      const allTasks = getAllTasks(tasks);

      if (pinnedTasks) {
        $pinnedTasks.innerHTML = pinnedTasks;
        $noPinned.textContent = '';
      } else {
        $noPinned.textContent = 'No pinned tasks';
        $pinnedTasks.innerHTML = '';
      }

      if (allTasks) {
        $allTasks.innerHTML = allTasks;
      } else {
        $allTasks.innerHTML = '';
      }

      addPinEvent();
    });
  }
};

addPinEvent();

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  if ($input.value === '') {
    $error.textContent = 'Необходимо добавить текст!';
    return;
  }

  tasks.push(new Task($input.value));
  $input.value = '';
  $error.textContent = '';
  $noFound.textContent = '';

  $allTasks.innerHTML = getAllTasks(tasks);

  addPinEvent();
});

$input.addEventListener('input', (event) => {
  const filteredTasks = getAllTasks(filterByTitle(tasks, event.target.value));
  if (filteredTasks) {
    $noFound.textContent = '';
  } else {
    $noFound.textContent = 'No tasks found';
  }
  $allTasks.innerHTML = filteredTasks;
});
