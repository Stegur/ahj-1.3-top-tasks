export function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}

export default function filterByTitle(tasks, text) {
  return tasks.filter((task) => containsText(task.title, text));
}
