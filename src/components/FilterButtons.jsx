import React from 'react'

function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-lg font-medium transition ${currentFilter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
      >
        All
      </button>

      <button
        onClick={() => onFilterChange('active')}
        className={`px-4 py-2 rounded-lg font-medium transition ${currentFilter === 'active'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
      >
        Active
      </button>

      <button
        onClick={() => onFilterChange('completed')}
        className={`px-4 py-2 rounded-lg font-medium transition ${currentFilter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterButtons