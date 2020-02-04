/**
 * @param  {Array} tasks - массив объектов класса Task
 */
export default function getPinnedTasks(tasks) {
  let html = '';

  const array = tasks.filter((task) => task.isPinned);

  array.forEach((task) => {
    const str = `<li class="task"><span id="task-title">${task.title}</span><span class="pinned">V</span></li>`;
    html += str;
  });

  return html;
}
