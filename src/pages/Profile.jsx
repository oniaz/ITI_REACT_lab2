import React from 'react'

function Profile() {
  return (
    <section className="mx-auto max-w-3xl p-10">

      <h1 className="text-3xl font-bold text-slate-700 mb-6">Profile</h1>

      <div className="grid gap-4 sm:grid-cols-2">

        <div>
          <h2 className="text-lg font-semibold text-slate-700">Name</h2>
          <p className="text-slate-600">Omnia Mohamed</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-700">Track</h2>
          <p className="text-slate-600">MEARN Stack - Alexandria</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-700">Intake</h2>
          <p className="text-slate-600">Intake 1</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-700">Round</h2>
          <p className="text-slate-600">2 25-26</p>
        </div>

      </div>
    </section>
  )
}

export default Profile