import { Link } from 'react-router-dom'
import google from '../assets/google.svg'
import facebook from '../assets/facebook.svg'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          {/* Brand Info (4 Columns) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex flex-col gap-0.5 w-fit">
              <span className="font-serif text-4xl font-bold tracking-tight text-gray-900">
                bloggy
              </span>
              <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
            </Link>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mt-1">
              Discover stories, ideas, and expertise from writers around the world. Express yourself and share your unique perspectives.
            </p>

            {/* Social Icons matching your auth login style */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#google"
                aria-label="Google"
                className="flex items-center justify-center bg-amber-100 hover:bg-amber-200 w-10 h-10 rounded-full transition hover:scale-105"
              >
                <img src={google} alt="Google icon" className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex items-center justify-center bg-amber-100 hover:bg-amber-200 w-10 h-10 rounded-full transition hover:scale-105"
              >
                <img src={facebook} alt="Facebook icon" className="w-5 h-5" />
              </a>
              <a
                href="#github"
                aria-label="GitHub"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full transition text-gray-700 hover:scale-105"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href="#twitter"
                aria-label="X / Twitter"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full transition text-gray-700 hover:scale-105"
              >
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-gray-900 font-bold text-base">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-indigo-600 transition">Explore Posts</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories (2 Columns) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-gray-900 font-bold text-base">Categories</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
              <li>
                <Link to="/explore?category=technology" className="hover:text-indigo-600 transition">Technology</Link>
              </li>
              <li>
                <Link to="/explore?category=design" className="hover:text-indigo-600 transition">Design</Link>
              </li>
              <li>
                <Link to="/explore?category=lifestyle" className="hover:text-indigo-600 transition">Lifestyle</Link>
              </li>
              <li>
                <Link to="/explore?category=business" className="hover:text-indigo-600 transition">Business</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box (4 Columns) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-gray-900 font-bold text-base">Stay in the Loop</h4>
            <p className="text-gray-500 text-sm">
              Subscribe to get the best articles delivered straight to your inbox weekly.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 mt-1">
              <div className="flex items-center border rounded-xl px-4 py-2.5 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500 transition">
                <i className="fa-solid fa-envelope text-gray-400 mr-3"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition hover:scale-[0.98] cursor-pointer text-sm shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} bloggy Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-gray-900 transition">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer