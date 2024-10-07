

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the task description from the input field
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;

      // Create a new list item and add it to the task list
      if (taskDescription) {
          const listItem = document.createElement("li");
          listItem.textContent = taskDescription;
          taskList.appendChild(listItem);

          // Clear the input field
          taskInput.value = "";
      }
  });
});
