import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function Task() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (!savedTodos) {
            setTask(null);
            return;
        }

        const todos = JSON.parse(savedTodos);
        const foundTask = todos.find(todo => String(todo.id) === id);
        setTask(foundTask ?? null);
    }, [id]);

    const handleToggle = () => {
        const savedTodos = localStorage.getItem('todos');
        if (!savedTodos) return;

        const todos = JSON.parse(savedTodos);
        const updatedTodos = todos.map(todo =>
            String(todo.id) === id
                ? { ...todo, completed: !todo.completed }
                : todo
        );

        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        setTask({ ...task, completed: !task.completed });
    };

    const handleDelete = () => {
        const savedTodos = localStorage.getItem('todos');
        if (!savedTodos) return;

        const todos = JSON.parse(savedTodos);
        const updatedTodos = todos.filter(todo => String(todo.id) !== id);

        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        navigate('/tasks');
    };

    if (!task) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Task Not Found</h1>
                <Link to="/tasks" className="text-blue-500 hover:underline">
                    Back to Tasks
                </Link>
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

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Task ID</h2>
                    <p className="text-gray-500 text-sm font-mono">{task.id}</p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleToggle}
                        className="px-6 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
                    >
                        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                    </button>

                    <button
                        onClick={handleDelete}
                        className="px-6 py-2 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task