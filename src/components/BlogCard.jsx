import { Link } from 'react-router-dom'

function BlogCard({ blog }) {
  // Destructure with safe fallbacks in case properties are missing
  const {
    id = '1',
    title = 'Getting Started with Modern Web Development in 2026',
    excerpt = 'Explore the core principles, tooling, and framework choices that make modern web applications fast, scalable, and delightful to build.',
    category = 'Technology',
    coverImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    createdAt = 'Oct 24, 2025',
    readTime = '5 min read',
    author = {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
  } = blog || {}

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Cover Image Wrapper */}
      <div className="relative w-full h-52 overflow-hidden bg-gray-100">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-amber-400 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-md tracking-wide uppercase">
          {category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata: Date & Read Time */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
            <span>{createdAt}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-clock"></i>
              <span>{readTime}</span>
            </div>
          </div>

          {/* Post Title */}
          <Link to={`/blog/${id}`}>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-2">
              {title}
            </h3>
          </Link>

          {/* Short Excerpt */}
          <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
            {excerpt}
          </p>
        </div>

        {/* Footer Section: Author Info & Bookmark */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          {/* Author Avatar & Name */}
          <div className="flex items-center gap-3">
            <img
              src={author.avatar || 'https://via.placeholder.com/40'}
              alt={author.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-100"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-800 leading-tight">
                {author.name}
              </span>
              <span className="text-[11px] text-gray-400">Author</span>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            aria-label="Save blog post"
            className="text-gray-400 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition cursor-pointer"
          >
            <i className="fa-regular fa-bookmark text-base"></i>
          </button>
        </div>

      </div>
    </article>
  )
}

export default BlogCard