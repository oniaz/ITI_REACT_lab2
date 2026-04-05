import React from 'react'

function FilterButtons({ currentFilter, onFilterChange }) {
  const filterButtonClass = (type, isActive) => {
    const activeClasses = {
      all: 'bg-sky-100 text-sky-800',
      active: 'bg-emerald-100 text-emerald-800',
      completed: 'bg-violet-100 text-violet-800'
    };

    return `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive
      ? activeClasses[type]
      : 'bg-white text-slate-600 hover:bg-slate-100'
      }`;
  };

  return (
    <div className="mb-6 mt-6 flex flex-wrap gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-sm">
      <button
        onClick={() => onFilterChange('all')}
        className={filterButtonClass('all', currentFilter === 'all')}
      >
        All
      </button>

      <button
        onClick={() => onFilterChange('active')}
        className={filterButtonClass('active', currentFilter === 'active')}
      >
        Active
      </button>

      <button
        onClick={() => onFilterChange('completed')}
        className={filterButtonClass('completed', currentFilter === 'completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterButtons