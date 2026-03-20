const services = [
  {
    title: 'Domestic Services',
    description: 'A comprehensive range of electrical services for homes across Somerset: ensuring safety, efficiency, and exceptional quality in every project.',
    items: ['Inspection & Testing', 'EV Charger Installation', 'Full Property Rewires', 'Fault Finding & Diagnosis', 'General Installations', 'Garden & Outdoor Lighting'],
  },
  {
    title: 'Commercial Services',
    description: 'Expert electrical services tailored to meet the demands of your business, delivered to commercial clients across Somerset.',
    items: ['3-Phase Power Installations', 'Energy-Efficient Lighting Upgrades', 'Testing & Maintenance', 'Electrical Fault Resolution', 'Compliance & Certification', 'Routine Upkeep'],
  },
  {
    title: '24/7 Call-Out',
    description: 'We understand how disruptive a loss of power can be. Our round-the-clock call-out service means swift, professional assistance whenever you need it.',
    items: ['Available Every Day of the Week', 'Rapid Response', 'Emergency Fault Finding', 'Power Restoration', 'No Call-Out Too Small', 'Covering All of Somerset'],
  },
]

const reasons = [
  { title: 'NICEIC Approved', description: 'All work is carried out to the highest standard and independently assessed by NICEIC.' },
  { title: '10+ Years Experience', description: 'Qualified and experienced in all aspects of domestic and light commercial electrical work.' },
  { title: 'Local & Reliable', description: 'Based in the local area. Punctual, approachable, and always tidy on the job.' },
]

const testimonials = [
  { name: 'Fiona White', text: "Urgent cooker installation the day before Xmas Eve! Harrison came out straight away and dealt with quickly… saved Christmas for us! Will be using again in the future when needed" },
  { name: 'Sophie Wells', text: 'Harrison did a great job of installing an outdoor socket for me. Everything was incredibly neat and tidy, he is clearly someone who takes pride in his work, has respect for your property, and a very fair price. I have already booked in more work.' },
  { name: 'Alison Hieron', text: "Harrison did an amazing job of doing all the electrics for our house refurbishment. Had great ideas for our new kitchen regarding a lighting feature. Highly recommend Harrison to anyone who needs an electrician  Who is reliable, helpful and genuine." },
]

function Content() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-stone-50 border-b border-stone-200 py-24 px-6 text-center bg-[url(/hero_bg.avif)] bg-cover overflow-hidden relative">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto  p-6 rounded-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Reliable Electrical Services<br />You Can Trust
          </h1>
          <p className="mt-5 text-lg text-white">
            NICEIC approved electrician serving Burnham-on-sea. Domestic installations,
            consumer units, EV chargers, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="bg-primary hover:opacity-90 text-white font-medium px-6 py-3 rounded transition-opacity">
              Get a Free Quote
            </a>
            <a href="#services" className="bg-white border border-stone-300 hover:border-stone-400 text-stone-700 font-medium px-6 py-3 rounded transition-colors">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center">Services</h2>
          <p className="mt-3 text-stone-500 text-center max-w-xl mx-auto">
            Covering domestic, commercial, and emergency electrical work across Somerset.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-stone-200 rounded-lg p-6 flex flex-col">
                <h3 className="font-semibold text-stone-800 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{s.description}</p>
                <ul className="mt-4 mb-4 space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-auto text-sm text-primary font-medium hover:underline">
                  Enquire →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-50 border-y border-stone-200 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center">Why Choose Me</h2>
          <div className="mt-12 flex flex-wrap justify-center w-full gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="text-center max-w-80">
                <h3 className="font-semibold text-stone-800">{r.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-100 h-120 rounded-lg shrink-0 bg-stone-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-stone-400" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-stone-900">About Me</h2>
            <p className="mt-6 text-stone-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
              est laborum
            </p>
            <p className="mt-4 text-stone-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-50 border-y border-stone-200 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center">What Customers Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-stone-200 rounded-lg p-6">
                <p className="text-stone-600 text-sm leading-relaxed">"{t.text}"</p>
                <p className="mt-4 text-sm font-semibold text-stone-800">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        
        <div className="flex flex-wrap justify-around w-full">
          
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-stone-900">Get in Touch</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <h3>Phone Number</h3>
                <a href="tel:+447399614344" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  07399 614344
                </a>
              </li>
              <li>
                <h3>Email</h3>
                <a href="mailto:harrisonjameselectricalserv@gmail.com" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  harrisonjameselectricalserv@gmail.com
                </a>
              </li>
              <li >
                <h3>Based in</h3>
                <p className="text-sm text-stone-500">Burnham-on-Sea, Somerset</p>
              </li>
            </ul>
          </div>
          <div className="max-w-xl text-center ">
            <h2 className="text-3xl font-bold text-stone-900 text-center">Contact Form</h2>
            <p className="mt-3 text-stone-500">
              Get a free, no-obligation quote. I'll get back to you within one working day.
            </p>
            <form className="mt-10 flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                  <input type="text" placeholder="Your name" className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                  <input type="tel" placeholder="Your number" className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows={4} placeholder="Describe the work you need..." className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" />
              </div>
              <button type="submit" className="bg-primary hover:opacity-90 text-white font-medium px-6 py-3 rounded transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Content
