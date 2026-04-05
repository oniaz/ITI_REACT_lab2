import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([])


  const handleAddTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false
    };
    setTodos([...todos, newTodo]); // Add to array
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList todos={todos} />
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  )
}

export default App