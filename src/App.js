// src/App.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { ref, set, onValue, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const todoRef = ref(db, 'todos/');
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      const loadedTodos = data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : [];
      setTodos(loadedTodos);
    });
  }, []);

  const addTodo = () => {
    const id = uuidv4();
    set(ref(db, 'todos/' + id), {
      text: input,
    });
    setInput('');
  };

  const deleteTodo = (id) => {
    remove(ref(db, 'todos/' + id));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>🔥 Firebase To-Do App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
