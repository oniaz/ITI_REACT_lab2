import React from 'react'

function TodoItem({ item }) {
    // const itemTest = item || {
    //     id: 1,
    //     title: 'Test Todo Item',
    //     description: "item 1 for testing purposes. this is the description for item 1.",
    //     completed: false
    // }

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

        </div>
    )
}

export default TodoItem