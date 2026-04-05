import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import FilterButtons from './components/FilterButtons'

import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });


  return (
    <div>
      <h1>My Todo App</h1>

      <div >
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      </div>

      <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  )
}

export default App