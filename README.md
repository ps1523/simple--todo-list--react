# Simple Todo List React

This repository contains a simple Todo List application built with React and Firebase Realtime Database. The app demonstrates CRUD operations for todo items, with real-time synchronization using Firebase. It can be used as a learning project or as a starter for your own React + Firebase applications.

## Features

- Add, view, and delete todo items
- Real-time updates across clients via Firebase
- Clean and minimal UI
- Modern React functional components with hooks (`useState`, `useEffect`)
- Firebase integration for backend data storage

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Firebase account & project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ps1523/simple--todo-list--react.git
   cd simple--todo-list--react
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable the Realtime Database.
   - In `src/firebase.js`, replace the placeholder values in `firebaseConfig` with your own Firebase project credentials.

4. Start the app:
   ```bash
   npm start
   # or
   yarn start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

## Usage

- Enter a todo item in the input box and click "Add" to create it.
- Your todos will appear in a list below. Click the ❌ button to delete a todo.
- All changes are synced in real time via Firebase.

## Project Structure

- `src/App.js` - Main React component handling UI and Firebase operations
- `src/firebase.js` - Firebase setup and database export
- `src/index.js` - Entry point for the React app
- `src/App.css`, `src/index.css` - Styling
- `public/index.html` - HTML template

## Testing

Basic tests are set up using Jest and React Testing Library (`src/App.test.js`). Run tests with:
```bash
npm test
# or
yarn test
```

## Customization

- You can extend the app with features such as editing todos, user authentication, or due dates.
- Update styles in `src/App.css` or `src/index.css` for a personalized look.

## License

This project is provided for learning and demonstration purposes. Feel free to use, modify, and share!

---

**Created by [ps1523](https://github.com/ps1523)**
