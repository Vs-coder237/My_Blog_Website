import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './searchBar'

function Navbar({ user, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Handle search action triggered from the Navbar search bar
  const handleSearch = (query, category) => {
    navigate(`/explore?search=${encodeURIComponent(query)}&category=${category}`)
  }

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left: Brand Logo & Links */}
          <div className="flex items-center gap-8 flex-shrink-0">
            <Link to="/" className="flex flex-col gap-0.5">
              <span className="font-serif text-4xl font-bold tracking-tight text-gray-900">
                bloggy
              </span>
              <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
                Home
              </Link>
              <Link to="/explore" className="text-gray-500 hover:text-indigo-600 font-medium transition">
                Explore
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-indigo-600 font-medium transition">
                About
              </Link>
            </div>
          </div>

          {/* Center: Interactive SearchBar (Desktop & Tablet) */}
          <div className="hidden sm:block flex-1 max-w-lg mx-2">
            <SearchBar onSearch={handleSearch} placeholder="Search articles or topics..." />
          </div>

          {/* Right: User Auth / Profile Section */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            {user ? (
              <div className="flex items-center gap-3">
                {/* Write Article Action */}
                <Link
                  to="/create-post"
                  className="flex items-center gap-2 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2.5 rounded-xl font-semibold text-sm transition"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Write</span>
                </Link>

                {/* Profile Avatar Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-indigo-500 transition focus:outline-none cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-bold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>

                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <i className="fa-solid fa-user text-gray-400 w-4"></i>
                        <span>My Profile</span>
                      </Link>

                      <Link
                        to="/my-blogs"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <i className="fa-solid fa-newspaper text-gray-400 w-4"></i>
                        <span>My Posts</span>
                      </Link>

                      {/* Admin Access Link */}
                      {user.role === 'admin' && (
                        <Link
                          to="/admin/dashboard"
                          className="flex items-center gap-3 px-4 py-2 text-sm text-amber-700 bg-amber-50 font-medium hover:bg-amber-100 transition"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <i className="fa-solid fa-shield-halved text-amber-600 w-4"></i>
                          <span>Admin Dashboard</span>
                        </Link>
                      )}

                      <hr className="my-1 border-gray-100" />

                      <button
                        onClick={() => {
                          setIsDropdownOpen(false)
                          onLogout()
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition cursor-pointer text-left"
                      >
                        <i className="fa-solid fa-right-from-bracket text-red-400 w-4"></i>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Unauthenticated Actions */
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/login')}
                  className="text-gray-700 hover:text-indigo-600 font-semibold px-4 py-2.5 rounded-xl transition cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-sm hover:scale-95 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 focus:outline-none"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-3">
          
          {/* Mobile SearchBar */}
          <div className="my-3">
            <SearchBar onSearch={(q, cat) => {
              setIsMobileMenuOpen(false)
              handleSearch(q, cat)
            }} />
          </div>

          <Link
            to="/"
            className="block px-3 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Explore
          </Link>

          {user ? (
            <>
              <Link
                to="/create-post"
                className="block px-3 py-2 rounded-lg font-semibold text-amber-800 bg-amber-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                + Write Post
              </Link>
              {user.role === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  className="block px-3 py-2 rounded-lg font-semibold text-amber-700 bg-amber-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onLogout()
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-red-600 font-semibold hover:bg-red-50"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  navigate('/login')
                }}
                className="w-full text-center py-2.5 border border-gray-200 rounded-xl font-semibold text-gray-700"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  navigate('/register')
                }}
                className="w-full text-center py-2.5 bg-indigo-600 text-white rounded-xl font-semibold"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar