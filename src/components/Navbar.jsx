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
          <li><a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a></li>
        </ul>

        <a
          href="#contact"
          className="text-sm bg-primary hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded transition-colors"
        >
          Get a Quote
        </a>
      </nav>
    </header>
  )
}

export default Navbar
