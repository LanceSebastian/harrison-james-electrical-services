function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 px-6 pt-12 pb-6">
      <div className="max-w-5xl mx-auto">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-stone-800 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+447399614344" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  07399 614344
                </a>
              </li>
              <li>
                <a href="mailto:harrisonjameselectricalserv@gmail.com" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  harrisonjameselectricalserv@gmail.com
                </a>
              </li>
              <li className="text-sm text-stone-500">
                Burnham-on-Sea, Somerset
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-stone-800 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-stone-800 uppercase tracking-wider">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-400 text-xs">
          <span>© {new Date().getFullYear()} Harrison James Electrical Services LTD</span>
          <span>Serving Burnham-on-Sea & surrounding Somerset areas</span>
          <span>Made by <a href="https://lancesebastian.co.uk" target="_blank" rel="noreferrer">Lance Sebastian</a></span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
