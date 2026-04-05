import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {

    return (
        todos.map((item) => (
            <TodoItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
        ))
    )
}

export default TodoList