import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex  items-center h-16 gap-2">
                    <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
                    <NavLink to="/tasks" className="hover:text-gray-200">Tasks</NavLink>
                    <NavLink to="/profile" className="hover:text-gray-200">Profile</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar