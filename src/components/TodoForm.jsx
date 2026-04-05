import React, { useState } from 'react'

function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        if (!title.trim()) return;
        onAddTodo(title.trim(), description.trim());
        setTitle('');
        setDescription('');
    };

    return (
        <div className="mt-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-700">Add New Task</h2>

            <input
                type="text"
                placeholder="Title"
                className="mb-3 w-full rounded-xl border border-sky-200 bg-white px-4 py-2.5 text-slate-700 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <input
                type="text"
                placeholder="Description"
                className="mb-4 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />


            <button
                className="w-full rounded-xl bg-violet-100 py-2.5 font-semibold text-violet-800 transition hover:bg-violet-200"
                onClick={handleAdd}
            >
                Add Task
            </button>
        </div >
    )
}

export default TodoForm