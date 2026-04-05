import { Link } from 'react-router-dom'

function TodoItem({ item, onToggle, onDelete }) {

    return (
        <div className="mb-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">

            <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-700">
                    {item.title}
                </h2>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${item.completed
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                        }`}
                >
                    {item.completed ? 'Completed' : 'In Progress'}
                </span>
            </div>

            <p className="mb-4 text-sm text-slate-500">
                {item.description || 'No description added yet.'}
            </p>

            <Link
                to={`/task/${item.id}`}
                className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 transition hover:bg-sky-200"
            >
                Open task details
            </Link>

            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    onClick={() => onToggle(item.id)}
                    className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 transition hover:bg-violet-200"
                >
                    {item.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>

                <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-200"
                >
                    Delete
                </button>
            </div>

        </div>
    )
}

export default TodoItem