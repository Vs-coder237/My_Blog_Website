import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar({ onSearch, placeholder = 'Search articles, topics, or authors...' }) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const categories = ['All', 'Technology', 'Design', 'Lifestyle', 'Business']

  // Mock live suggestions (you can connect this to your backend API)
  const sampleSuggestions = [
    { id: '1', title: 'Getting Started with Modern Web Development', category: 'Technology' },
    { id: '2', title: '10 Essential Design System Principles', category: 'Design' },
    { id: '3', title: 'Building Scalable APIs with Node.js and Express', category: 'Technology' },
  ]

  const filteredSuggestions = sampleSuggestions.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesQuery && matchesCategory
  })

  // Keyboard shortcut listener ('/' or 'Ctrl+K' to focus search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    setIsOpen(false)
    if (onSearch) {
      onSearch(query, selectedCategory)
    } else {
      navigate(`/explore?search=${encodeURIComponent(query)}&category=${selectedCategory}`)
    }
  }

  const handleSelectSuggestion = (id) => {
    setIsOpen(false)
    navigate(`/blog/${id}`)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input Box */}
      <form
        onSubmit={handleSubmit}
        className={`flex items-center border rounded-2xl px-4 py-3 bg-white shadow-sm transition-all duration-200 ${
          isOpen ? 'ring-2 ring-indigo-500 border-transparent shadow-md' : 'hover:border-gray-300'
        }`}
      >
        <i className="fa-solid fa-magnifying-glass text-gray-400 text-lg mr-3"></i>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-sm font-medium text-gray-800 placeholder-gray-400"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
            className="text-gray-400 hover:text-gray-600 p-1 mr-2 transition cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        )}

        {/* Keyboard Hint */}
        {!query && (
          <div className="hidden sm:flex items-center gap-1 bg-gray-100 text-gray-400 text-[11px] font-bold px-2 py-1 rounded-lg mr-2">
            <span>⌘K</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition hover:scale-[0.98] cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* Quick Search Dropdown Window */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-100 shadow-xl z-50 overflow-hidden py-3">
          
          {/* Category Filter Chips */}
          <div className="px-4 pb-3 border-b border-gray-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-gray-400 mr-1">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3 py-1 rounded-full transition cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-gray-900 shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Results List */}
          <div className="max-h-72 overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-4 text-xs font-semibold text-gray-400 flex items-center gap-2">
                <i className="fa-solid fa-fire text-amber-500"></i>
                <span>Trending Searches: "React 19", "Tailwind Tips", "Express API"</span>
              </div>
            ) : filteredSuggestions.length > 0 ? (
              <div className="py-1">
                <div className="px-4 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Articles ({filteredSuggestions.length})
                </div>
                {filteredSuggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectSuggestion(item.id)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-indigo-50 cursor-pointer transition group"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fa-regular fa-file-lines text-gray-400 group-hover:text-indigo-600 transition"></i>
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md ml-2">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-sm text-gray-500">
                <i className="fa-solid fa-magnifying-glass text-gray-300 text-2xl mb-2 block"></i>
                No matching results found for "<span className="font-semibold">{query}</span>"
              </div>
            )}
          </div>

          {/* Bottom Action Hint */}
          {query.trim() !== '' && (
            <div className="px-4 pt-2 border-t border-gray-100 text-center">
              <button
                onClick={handleSubmit}
                className="text-xs font-semibold text-indigo-600 hover:underline cursor-pointer"
              >
                See all results for "{query}" →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar