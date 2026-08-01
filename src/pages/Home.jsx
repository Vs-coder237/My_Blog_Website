import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'

function Home({ user, onLogout }) {
  const [activeCategory, setActiveCategory] = useState('All')

  // Sample Featured Hero Post
  const featuredBlog = {
    id: 'hero-1',
    title: 'Architecting Scalable Full-Stack Applications with React and Express',
    excerpt:
      'Discover industry-proven patterns for structuring robust client-server architectures, managing JWT authentications, and building seamless digital experiences.',
    category: 'Technology',
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    createdAt: 'Aug 1, 2026',
    readTime: '7 min read',
    author: {
      name: 'Sarah Jenkins',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
  }

  // Sample Main Feed Articles
  const blogs = [
    {
      id: '1',
      title: '10 Minimalist Design Principles for Modern Web Apps',
      excerpt:
        'How clean typography, intentional whitespace, and balanced color palettes create immersive user interfaces.',
      category: 'Design',
      coverImage:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      createdAt: 'Jul 28, 2026',
      readTime: '4 min read',
      author: {
        name: 'Alex Morgan',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
    },
    {
      id: '2',
      title: 'Building High-Performance REST APIs in 2026',
      excerpt:
        'Learn how to structure database middleware, handle auth state securely, and optimize database queries.',
      category: 'Technology',
      coverImage:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      createdAt: 'Jul 25, 2026',
      readTime: '6 min read',
      author: {
        name: 'David Chen',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      },
    },
    {
      id: '3',
      title: 'The Modern Creator: Balancing Passion with Productivity',
      excerpt:
        'Actionable strategies for content creators and software developers to maintain workflow focus without burnout.',
      category: 'Lifestyle',
      coverImage:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
      createdAt: 'Jul 20, 2026',
      readTime: '5 min read',
      author: {
        name: 'Emma Watson',
        avatar:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      },
    },
    {
      id: '4',
      title: 'Why Micro-Startups Are Thriving with Lean Tech Stacks',
      excerpt:
        'Discover why smaller teams leveraging agile JavaScript frameworks are outperforming larger legacy platforms.',
      category: 'Business',
      coverImage:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      createdAt: 'Jul 15, 2026',
      readTime: '8 min read',
      author: {
        name: 'Michael Ross',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
    },
  ]

  // Trending Sidebar Topics
  const trendingTopics = [
    { title: 'Understanding React 19 Server Actions', reads: '12.4k reads' },
    { title: 'Designing Accessible Web Components', reads: '8.1k reads' },
    { title: 'Best Practices for Storing Tokens Safely', reads: '15.9k reads' },
  ]

  const categories = ['All', 'Technology', 'Design', 'Lifestyle', 'Business']

  const filteredBlogs =
    activeCategory === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Shared Navbar */}
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* HERO SECTION: Featured Post Banner */}
        <section className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Text Info */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-400 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Featured
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  {featuredBlog.createdAt} • {featuredBlog.readTime}
                </span>
              </div>

              <Link to={`/blog/${featuredBlog.id}`}>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 hover:text-indigo-600 transition leading-tight mb-4">
                  {featuredBlog.title}
                </h1>
              </Link>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                {featuredBlog.excerpt}
              </p>

              {/* Author & Read Action */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredBlog.author.avatar}
                    alt={featuredBlog.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-100"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {featuredBlog.author.name}
                    </p>
                    <p className="text-xs text-gray-400">Featured Author</p>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredBlog.id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition hover:scale-95"
                >
                  <span>Read Article</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>

            {/* Right: Featured Cover Image */}
            <div className="lg:col-span-5 h-64 lg:h-full min-h-80 relative overflow-hidden">
              <img
                src={featuredBlog.coverImage}
                alt={featuredBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* CATEGORY TABS & MAIN FEED SECTION */}
        <section className="space-y-6">
          
          {/* Section Header & Category Chips */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-xs text-gray-500 mt-0.5">Explore stories, technical insights, and thoughts</p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-gray-900 shadow-sm font-bold'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout: Main Feed (8 cols) + Sidebar (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Article Grid */}
            <div className="lg:col-span-8">
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                  <i className="fa-solid fa-folder-open text-gray-300 text-4xl mb-3 block"></i>
                  <p className="text-gray-500 font-medium">No articles found in this category.</p>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Trending Topics Widget */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <i className="fa-solid fa-fire text-amber-500"></i>
                  <h3 className="font-bold text-gray-900">Trending Today</h3>
                </div>

                <div className="space-y-4">
                  {trendingTopics.map((item, idx) => (
                    <div key={idx} className="flex gap-3 group cursor-pointer">
                      <span className="text-2xl font-serif font-bold text-amber-400">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-gray-400 font-medium">{item.reads}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Write CTA Card (if user is logged in or encouraging guests) */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-6 text-white shadow-md">
                <span className="bg-amber-400 text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Community
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">Share Your Voice on bloggy</h3>
                <p className="text-indigo-100 text-xs leading-relaxed mb-4">
                  Join hundreds of authors expressing ideas, technical tutorials, and creative stories.
                </p>
                <Link
                  to={user ? "/create-post" : "/register"}
                  className="inline-block bg-white text-indigo-900 hover:bg-amber-400 hover:text-gray-900 font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-sm text-center w-full"
                >
                  {user ? "Write an Article Now" : "Create Free Account"}
                </Link>
              </div>

            </aside>

          </div>

        </section>

      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  )
}

export default Home