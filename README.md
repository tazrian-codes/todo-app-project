# Todo App

This is a simple Todo App built using HTML, CSS and JavaScript.

I made this project to practice DOM manipulation and Local Storage.

---

## Features

- Add new task
- Mark task as completed
- Delete task
- Tasks stay saved using Local Storage
- Simple and responsive UI

---

## How It Works

- When user clicks **Add**, a new `<li>` element is created.
- Clicking on a task toggles the `checked` class.
- Clicking on ❌ removes the task.
- All tasks are stored in browser Local Storage using:
  
  ```js
  localStorage.setItem("data", listContainer.innerHTML);
  ```

- When page reloads, tasks are loaded using:

  ```js
  listContainer.innerHTML = localStorage.getItem("data");
  ```

---

## What I Practiced

- DOM Selection (`getElementById`)
- Event Listener
- Creating Elements (`createElement`)
- Class Toggle
- Local Storage
- Basic Responsive Design

---

## Future Improvements

- Add Edit option
- Add Enter key support
- Add task counter
- Add filter (All / Completed / Pending)

---

This is a beginner-friendly project.  
I am currently learning JavaScript and improving step by step 🚀
