import React from 'react'

function TodoItem({ item, onToggle, onDelete }) {

    return (
        <div className="bg-white shadow-md rounded-2xl p-5 mb-4 border border-gray-100 hover:shadow-lg transition duration-200">

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
            </h2>

            <p className="text-gray-600 text-sm mb-3">
                {item.description}
            </p>

            <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${item.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                    }`}
            >
                {item.completed ? 'Completed' : 'Not Completed'}
            </span>

            <button
                onClick={() => onToggle(item.id)}
                className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
            >
                {item.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>

            <button
                onClick={() => onDelete(item.id)}
                className="text-xs font-medium px-3 py-1 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"
            >
                Delete
            </button>

        </div>
    )
}

export default TodoItem