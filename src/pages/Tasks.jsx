import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import FilterButtons from '../components/FilterButtons'

import { useState, useEffect } from 'react'

function Tasks() {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
        <div className="mx-auto max-w-4xl">
            <TodoForm onAddTodo={handleAddTodo} />
            <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
            <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
    )
}


export default Tasks