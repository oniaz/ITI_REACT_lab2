import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'
import Task from './pages/TaskPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-taupe-100 px-4 py-6 text-slate-700 font-[ui-rounded,'SF_Pro_Rounded','Avenir_Next',ui-sans-serif,sans-serif] sm:px-8">
        <Navbar />

        <main className="mx-auto mt-6 max-w-6xl rounded-3xl border border-slate-100 bg-white p-4 shadow-sm sm:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/task/:id" element={<Task />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App