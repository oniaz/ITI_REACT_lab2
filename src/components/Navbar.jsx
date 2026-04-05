import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-600 shadow-sm transition-all"
            : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 transition-all";

    return (
        <nav className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full bg-violet-50 p-1.5">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/tasks" className={navLinkClass}>Tasks</NavLink>
                    <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar