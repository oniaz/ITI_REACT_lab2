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
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <h1 className="mb-4 text-2xl font-bold text-slate-700">Task Not Found</h1>
                <Link to="/tasks" className="font-semibold text-sky-700 hover:text-sky-800">
                    Back to Tasks
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="rounded-2xl bg-white p-7">
                <h1 className="mb-4 text-3xl font-bold text-slate-700">{task.title}</h1>

                <div className="mb-6">
                    <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${task.completed
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                            }`}
                    >
                        {task.completed ? 'Completed' : 'In Progress'}
                    </span>
                </div>

                <div className="mb-4">
                    <h2 className="mb-2 text-lg font-semibold text-slate-700">Description</h2>
                    <p className="text-slate-600">{task.description || 'No description provided.'}</p>
                </div>

                <div className="mb-6">
                    <h2 className="mb-2 text-lg font-semibold text-slate-700">Task ID</h2>
                    <p className="font-mono text-sm text-slate-500">{task.id}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={handleToggle}
                        className="rounded-full bg-sky-200 px-5 py-2 font-semibold text-sky-800 transition hover:bg-sky-300"
                    >
                        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                    </button>

                    <button
                        onClick={handleDelete}
                        className="rounded-full bg-amber-200 px-5 py-2 font-semibold text-amber-800 transition hover:bg-amber-300"
                    >
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task