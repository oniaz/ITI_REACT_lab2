import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-sky-200 bg-white p-8 text-center text-slate-500">
                No tasks yet. Add your first pastel task above.
            </div>
        );
    }

    return (
        <div className="mt-4">
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default TodoList