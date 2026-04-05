import React, { useState } from 'react'

function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto mt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Todo</h2>

            <input
                type="text"
                placeholder="Title"
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <input
                type="text"
                placeholder="Description"
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />


            <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => onAddTodo(title, description)}
            >
                Add Todo
            </button>
        </div >
    )
}

export default TodoForm