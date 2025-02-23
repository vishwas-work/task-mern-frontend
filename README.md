# Taskify - Task Management App

Taskify is a simple task management web application built using **React**. Users can **sign up, log in, and add tasks**, ensuring that tasks are **user-specific** and cannot be accessed or modified by others.

## Features

- **User Authentication**: Only logged-in users can add and view tasks.
- **Task Management**: Users can add, view, and manage their tasks.
- **Protected Routes**: Prevent unauthorized users from accessing tasks.
- **Redux Toolkit**: Efficient state management for tasks and authentication.
- **REST API Integration**: Uses Axios to communicate with the backend.
- **Toast Notifications**: User-friendly alerts for actions.

## Tech Stack

- **Frontend:** React, React Router, Redux Toolkit
- **State Management:** Redux Toolkit
- **API Calls:** Axios
- **Styling:** CSS / Tailwind (optional)

## Project Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vishwas-work/task-mern-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-mern-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running at `http://localhost:5173`.

## Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run preview` - Preview the production build.
- `npm run lint` - Lint the project using ESLint.

## Dependencies

```json
"dependencies": {
  "@reduxjs/toolkit": "^2.5.1",
  "axios": "^1.7.9",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-icons": "^5.4.0",
  "react-redux": "^9.2.0",
  "react-router-dom": "^7.1.5",
  "react-toastify": "^11.0.3"
}
```

## Dev Dependencies

```json
"devDependencies": {
  "@eslint/js": "^9.19.0",
  "@types/react": "^19.0.8",
  "@types/react-dom": "^19.0.3",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.19.0",
  "eslint-plugin-react": "^7.37.4",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.18",
  "globals": "^15.14.0",
  "vite": "^6.1.0"
}
```

## Contributing

Feel free to fork this repository and contribute by submitting pull requests. Any suggestions or improvements are welcome
