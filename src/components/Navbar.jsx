import { FaInstagram, FaFacebook } from 'react-icons/fa'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-stone-800 tracking-tight">
          <img src="/logo.avif"></img>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <li><a href="#services" className="hover:text-stone-900 transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-stone-900 transition-colors">About</a></li>
          <li><a href="#testimonials" className="hover:text-stone-900 transition-colors">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a></li>
        </ul>

        <div className='flex justify-center items-center gap-4'>
            <a
              href="/"
              className="text-sm hover:text-yellow-500 text-black font-medium rounded transition-colors"
            >
                <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="/"
              className="text-sm hover:text-yellow-500 text-black font-medium rounded transition-colors"
            >
                <FaFacebook className="w-8 h-8" />
            </a>
            <a
              href="#contact"
              className="text-sm bg-primary hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded transition-colors"
            >
              Get a Free Quote
            </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
