import React from 'react'
import './header.css'

function header() {
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-['Orbitron'] flex flex-col justify-center items-center">

{/* Logo and Navbar */}
<div className="flex justify-between items-center w-full p-8">
  <div className="flex items-center space-x-6">
    {/* Logo */}
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 shadow-lg">
      <span className="text-2xl font-bold text-white">R</span>
    </div>
    <h1 className="text-3xl font-semibold tracking-wider text-cyan-500">RoboTech</h1>
  </div>

  {/* Navigation */}
  <nav className="flex space-x-8 text-lg font-medium hover-links">
    {['Home', 'Shop', 'Support', 'Help'].map(link => (
      <a
        key={link}
        href="#"
        className="text-gray-300 hover:text-cyan-500 hover:scale-105 transition duration-300 ease-in-out"
      >
        {link}
      </a>
    ))}
  </nav>
</div>

{/* Search Bar */}
<div className="flex justify-center mt-20 w-full">
  <div className="relative w-3/4 max-w-lg">
    <input
      type="text"
      placeholder="Search for the future..."
      className="w-full p-4 pl-10 rounded-full text-lg bg-transparent text-white border border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 backdrop-blur-md shadow-xl"
    />
    <button className="absolute right-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 rounded-r-full hover:brightness-125 transition-all duration-300">
      <svg className="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 2a8 8 0 1 1-5.293 14.707l-3.404 3.404a1 1 0 0 1-1.414-1.414l3.404-3.404A8 8 0 0 1 10 2zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z" />
      </svg>
    </button>
  </div>
</div>

{/* Hero Section with Neon and Robotic Animations */}
<div className="flex justify-center items-center flex-col mt-16 space-y-8 relative">
  <div className="h-52 w-52 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full shadow-glow flex justify-center items-center">
    <svg
      className="h-24 w-24 text-cyan-500 animate-pulse"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4 12a8 8 0 1 1 16 0v8a1 1 0 0 1-1 1h-2v-4a3 3 0 0 0-6 0v4H9a1 1 0 0 1-1-1v-8zM12 14a1 1 0 0 1 1 1v4h-2v-4a1 1 0 0 1 1-1z"
      />
    </svg>
  </div>
  {/* Neon Glow Animation */}
  <div className="absolute -inset-4 rounded-full bg-cyan-500 opacity-30 animate-neonPulse"></div>
</div>

{/* Features Section */}
<div className="flex justify-center gap-16 mt-20">
  {[
    { title: 'AI Integration', gradient: 'from-cyan-500 to-blue-400' },
    { title: 'Automation', gradient: 'from-blue-400 to-cyan-600' },
    { title: '24/7 Support', gradient: 'from-gray-700 to-gray-800' }
  ].map((feature, index) => (
    <div
      key={index}
      className={`p-10 w-64 rounded-2xl bg-gradient-to-b ${feature.gradient} text-white shadow-xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl`}
    >
      <div className="h-20 w-20 bg-gray-900 rounded-full mx-auto flex items-center justify-center mb-5 shadow-lg border border-cyan-400">
        <svg
          className="h-12 w-12 text-cyan-300"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold">{feature.title}</h3>
    </div>
  ))}
</div>
</div>
    </div>
  )
}

export default header
