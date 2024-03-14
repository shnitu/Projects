// Selecting elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the input field
    const taskText = input.value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Append the new item to the list
    todoList.appendChild(listItem);

    // Clear the input field
    input.value = '';
});

// Event listener for marking tasks as complete
todoList.addEventListener('click', function(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
});

// Event listener for deleting tasks
todoList.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent default context menu

    const listItem = event.target;
    if (listItem.tagName === 'LI') {
        listItem.remove();
    }
});
