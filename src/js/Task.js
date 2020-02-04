export default class Task {
  constructor(title, pinned = false) {
    this.title = title;
    this.isPinned = pinned;
  }
}
