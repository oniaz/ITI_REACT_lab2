import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

function Task() {
    const { id } = useParams();
    const task = useMemo(() => {
        const savedTodos = localStorage.getItem('todos');

        if (!savedTodos) {
            return null;
        }

        const todos = JSON.parse(savedTodos);
        return todos.find(todo => String(todo.id) === id) ?? null;
    }, [id]);

    if (!task) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Task Not Found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold mb-4">{task.title}</h1>

                <div className="mb-6">
                    <span
                        className={`text-sm font-medium px-4 py-2 rounded-full ${task.completed
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                            }`}
                    >
                        {task.completed ? 'Completed' : 'In Progress'}
                    </span>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
                    <p className="text-gray-600">{task.description}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Task ID</h2>
                    <p className="text-gray-500 text-sm font-mono">{task.id}</p>
                </div>
            </div>
        </div>
    )
}

export default Task