# React Todo App
I developed a React Todo App that interacts with an API, providing functionalities to add, delete, toggle, and rename todos.

## Key Features
### Adding a Todo
- **API Request**: Sends a POST request to the API to add a new todo.
- **Input Disabled**: Disables the input until receiving a response from the API.
- **Loader**: Shows a loader for the temporary todo.
- **Success Handling**: Adds the todo from the POST response to the list.
- **Error Handling**: Shows "Unable to add a todo" notification in case of API error.
- **Text Field Focus**: Focuses the text field.

### Deleting Todos
- **Single Todo Deletion**: Deletes a todo on the delete button click, showing a loader and handling API responses.
- **Error Handling**: Shows "Unable to delete a todo" notification in case of API error.
- **Clear Completed**: Deletes all completed todos, handling multiple deletions simultaneously and showing error messages for any failed deletions.

### Toggling Todo Status
- **Single Todo Toggle**: Toggles the completed status of a todo, showing a loader and handling API responses.
- **Error Handling**: Shows "Unable to update a todo" notification in case of API error.
- **Toggle All**: Toggles the completed status of all todos:
  - Active Class: Adds an active class to the toggleAll button if all todos are completed.
  - Status Change: Changes the status to the opposite for all todos.
  - Individual Updates: Updates the status for each todo individually.
  - Unchanged Todos: Sends requests for todos that were actually changed.

### Renaming a Todo
- **Edit Mode**: Enables edit mode on double-click, showing an edit form.
- **Form Submit**: Saves changes on form submit or onBlur event.
- **Cancel Editing**: Cancels editing on Esc key press or if the new title is the same as the old one.
- **Empty Title**: Deletes the todo if the new title is empty.
- **Success Handling**: Updates the todo title on success.
- **Error Handling**: Shows "Unable to update a todo" or deletion error message in case of API error.

## Technologies Used

- **React**: For building the user interface.
- **SCSS**: For styling.
- **API Integration**: For Create, Read, Update, Delete operations with todos.

## Preview
You can see the result of the code here:
- [DEMO LINK](https://dennice-cloud.github.io/React-Todo-app/)

## How to Use
Node.js Version
- v14.21.3

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/DenNice-cloud/React-Todo-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd React-Todo-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
