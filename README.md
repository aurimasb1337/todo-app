# Todo Application

A simple Todo application built with React, Redux Toolkit, and React Router. This app allows users to create, edit, delete, and view their todos. Each user can manage their own list of tasks.

# Demo
[https://todo-app-five-rosy-82.vercel.app/](https://todo-app-five-rosy-82.vercel.app/)

# Note!
Summary page can only be accessed by manually typing `/summary` in the URL.

## Features

- User authentication with the ability to select a user from a list
- Create, read, update, and delete (CRUD) todos
- Mark todos as completed or not completed
- Responsive design using React Bootstrap

## Tech Stack

- **Frontend**: 
  - React
  - React Router
  - Redux Toolkit (for state management)
  - React Bootstrap (for UI components)
- **Backend**: 
  - REST API (mocked or integrated with a backend service)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aurimasb1337/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default browser at `http://localhost:3000`.

### Usage

1. Select a user from the home page.
2. Once logged in, you can:
   - Add a new todo by clicking the "Add Todo" button.
   - Edit an existing todo by clicking the "Edit" button.
   - Delete a todo by clicking the "Delete" button.
   - Mark todos as completed or not completed.

### API Integration

This application uses the following API endpoints:

- **GET /api/users**: Retrieve a list of users.
- **GET /api/todos/:userId**: Retrieve todos for a specific user.
- **POST /api/todos**: Add a new todo for a user.
- **PUT /api/todos/:id**: Update an existing todo.
- **DELETE /api/todos/:id**: Delete a specific todo.

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [React](https://reactjs.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) for providing the framework and tools for building this application.
- Inspired by various open-source projects and tutorials.

