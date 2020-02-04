/**
 * @param  {Array} tasks - массив объектов класса Task
 */
export default function getAllTasks(tasks) {
  let html = '';

  const array = tasks.filter((task) => !task.isPinned);

  array.forEach((task) => {
    const str = `<li class="task"><span id="task-title">${task.title}</span><span class="pinned"></span></li>`;
    html += str;
  });

  return html;
}
