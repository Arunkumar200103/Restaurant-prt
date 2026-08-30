import { useState, useEffect } from 'react'
import { Menu, MapPin, Clock, Phone, Utensils, Leaf, Flame, Star, Coffee, Award, Users, Facebook, Instagram, ArrowRight, Truck, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { menuData, galleryImages, heroImage, aboutImages, chefImage, offerImage, stats, testimonials, specialOffers, whyChooseItems, steps, events } from './data'
import { Reveal } from './Reveal'

const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'offers', label: 'Offers' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Visit Us' },
]

const whyIcons: Record<string, React.ReactNode> = {
  leaf: <Leaf size={24} />,
  flame: <Flame size={24} />,
  chef: <Utensils size={24} />,
  truck: <Truck size={24} />,
  heart: <Heart size={24} />,
  shield: <ShieldCheck size={24} />,
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [newsletterSent, setNewsletterSent] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const offset = window.scrollY + 120
      for (const sec of navSections) {
        const el = document.getElementById(sec.id)
        if (el && el.offsetTop <= offset && el.offsetTop + el.offsetHeight > offset) {
          setActiveSection(sec.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterSent(true)
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="nav-logo-mark">M</span>
            Maharaja's
          </a>
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {navSections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className={activeSection === sec.id ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, `#${sec.id}`)}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn btn-primary nav-cta" onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#visit')}>
              Reserve a Table
            </button>
          </div>
          <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img src={heroImage} alt="Authentic Indian cuisine" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tagline">Since 1998</span>
          <h1>Maharaja's <span className="accent">Cafe</span> &amp; Restaurant</h1>
          <p>Authentic Indian flavors crafted with traditional recipes and the freshest ingredients. A taste of home in every bite.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#menu')}>
              View Our Menu <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline" onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#visit')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              Find Us
            </button>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <Menu size={16} />
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} animation="fade">
                <div className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal animation="left">
              <div className="about-images">
                <img src={aboutImages[0]} alt="Restaurant interior" />
                <img src={aboutImages[1]} alt="Delicious Indian food" />
                <div className="about-badge">
                  <span className="number">25+</span>
                  <span className="label">Years of Tradition</span>
                </div>
              </div>
            </Reveal>
            <Reveal animation="right">
              <div className="about-text">
                <span className="section-label">Our Story</span>
                <h2 className="section-title">A Legacy of Flavor &amp; Hospitality</h2>
                <p>For over 25 years, Maharaja's Cafe and Restaurant has been serving authentic Indian cuisine to our community. What started as a small family kitchen has grown into a beloved dining destination, known for generous portions, warm service, and recipes passed down through generations.</p>
                <p>Every dish is prepared fresh to order using locally sourced ingredients and traditional cooking methods. From our tandoor to your table, we bring you the rich, diverse flavors of India with the comfort of home.</p>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="icon"><Utensils size={20} /></div>
                    <div>
                      <h4>Fresh Daily</h4>
                      <p>Made to order, never frozen</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="icon"><Award size={20} /></div>
                    <div>
                      <h4>Authentic Recipes</h4>
                      <p>Traditional family methods</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="icon"><Coffee size={20} /></div>
                    <div>
                      <h4>Cozy Ambiance</h4>
                      <p>Warm, welcoming atmosphere</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="icon"><Users size={20} /></div>
                    <div>
                      <h4>Family Owned</h4>
                      <p>Serving with pride since 1998</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">The Maharaja's Difference</h2>
              <p className="section-subtitle mx-auto">
                Six reasons why families across the region have chosen us as their favorite dining spot for over two decades.
              </p>
            </div>
          </Reveal>

          <div className="why-grid">
            {whyChooseItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} animation="up">
                <div className="why-card">
                  <div className="icon">{whyIcons[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section menu" id="menu">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center" style={{ marginBottom: 'var(--space-4)' }}>
              <span className="section-label">Our Menu</span>
              <h2 className="section-title">A Taste of India</h2>
              <p className="section-subtitle mx-auto">
                From sizzling tandoori starters to comforting South Indian classics, every dish tells a story.
              </p>
            </div>
          </Reveal>

          <Reveal animation="fade">
            <div className="menu-tabs">
              {menuData.map((cat, i) => (
                <button
                  key={cat.id}
                  className={`menu-tab ${activeCategory === i ? 'active' : ''}`}
                  onClick={() => setActiveCategory(i)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="menu-grid">
            {menuData[activeCategory].items.map((item, i) => (
              <Reveal key={`${activeCategory}-${i}`} delay={i * 80} animation="up">
                <div className="menu-item">
                  <img className="menu-item-img" src={item.image} alt={item.name} />
                  <div className="menu-item-body">
                    <div className="menu-item-header">
                      <h3 className="menu-item-name">{item.name}</h3>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-desc">{item.description}</p>
                    <div className="menu-item-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`menu-tag ${tag}`}>
                          {tag === 'veg' && <><Leaf size={10} />Veg</>}
                          {tag === 'spicy' && <><Flame size={10} />Spicy</>}
                          {tag === 'chef' && <><Star size={10} />Chef's Special</>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section offers" id="offers">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">Special Offers</span>
              <h2 className="section-title">Deals Worth Savoring</h2>
              <p className="section-subtitle mx-auto">
                Enjoy our most loved combinations at irresistible prices. Limited time only.
              </p>
            </div>
          </Reveal>

          <div className="offers-grid">
            {specialOffers.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 120} animation="up">
                <div className="offer-card">
                  <div className="offer-banner">
                    <span className="offer-badge">{offer.badge}</span>
                    <Star size={16} color="#fbd24e" fill="#fbd24e" />
                  </div>
                  <div className="offer-body">
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                    <div className="offer-prices">
                      <span className="offer-price">{offer.price}</span>
                      <span className="offer-original">{offer.originalPrice}</span>
                    </div>
                    <button className="btn btn-outline" style={{ width: '100%' }} onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#visit')}>
                      Order Now
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">Gallery</span>
              <h2 className="section-title">Moments at Maharaja's</h2>
              <p className="section-subtitle mx-auto">
                A glimpse into the food, the space, and the experience.
              </p>
            </div>
          </Reveal>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 80} animation="scale">
                <div className={`gallery-item ${img.size}`}>
                  <img src={img.url} alt={img.alt} loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">How It Works</span>
              <h2 className="section-title">Dining Made Simple</h2>
              <p className="section-subtitle mx-auto">
                Whether you are dining in or ordering at home, enjoying Maharaja's is just three easy steps away.
              </p>
            </div>
          </Reveal>

          <div className="how-grid">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120} animation="up">
                <div className="how-step">
                  <div className="how-step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="section chef">
        <div className="container">
          <div className="chef-grid">
            <Reveal animation="left">
              <div className="chef-image">
                <img src={chefImage} alt="Our chef preparing food" />
              </div>
            </Reveal>
            <Reveal animation="right">
              <div className="chef-text">
                <span className="section-label">Meet the Chef</span>
                <h2 className="section-title">Passion on Every Plate</h2>
                <p>Our head chef brings over 30 years of culinary expertise to Maharaja's. Trained in the traditional kitchens of South India, he has dedicated his life to preserving the authentic flavors and techniques that define our cuisine.</p>
                <p>Every spice is roasted and ground in-house. Every curry is built from scratch, layer by layer. This commitment to craft is what makes each dish at Maharaja's unforgettable.</p>
                <div className="chef-quote">
                  <p>"Cooking is not just about feeding people. It is about nurturing them, one plate at a time."</p>
                  <div className="chef-quote-author">— Head Chef, Maharaja's</div>
                </div>
                <div className="chef-signature">Maharaja's Kitchen</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">Testimonials</span>
              <h2 className="section-title">What Our Guests Say</h2>
              <p className="section-subtitle mx-auto">
                Thousands of happy diners have made Maharaja's their go-to spot. Here is what a few of them share.
              </p>
            </div>
          </Reveal>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} animation="up">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initial}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section events">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">Upcoming Events</span>
              <h2 className="section-title">Join the Celebration</h2>
              <p className="section-subtitle mx-auto">
                From festival feasts to live music nights, there is always something special happening at Maharaja's.
              </p>
            </div>
          </Reveal>

          <div className="events-grid">
            {events.map((ev, i) => (
              <Reveal key={ev.title} delay={i * 120} animation="up">
                <div className="event-card">
                  <div style={{ display: 'flex' }}>
                    <div className="event-date">
                      <span className="day">{ev.date}</span>
                      <span className="month">{ev.month}</span>
                    </div>
                    <div className="event-body">
                      <span className="event-tag">{ev.tag}</span>
                      <h3>{ev.title}</h3>
                      <p>{ev.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation" id="visit">
        <div className="reservation-bg">
          <img src={offerImage} alt="Dining at Maharaja's" />
        </div>
        <div className="reservation-overlay"></div>
        <div className="reservation-content">
          <Reveal animation="up">
            <span className="section-label">Reserve Your Table</span>
            <h2>Join Us for an Unforgettable Meal</h2>
            <p>Whether it is a family dinner, a celebration, or a quiet lunch, we would love to host you. Walk in or call ahead to reserve your table.</p>
            <div className="reservation-actions">
              <a href="tel:+91413XXXXXXX" className="btn btn-gold">
                <Phone size={18} /> Call to Reserve
              </a>
              <a href="https://www.google.com/maps/place/Maharaja%22s+Cafe+and+Restaurant/@11.9269283,79.4805556,17z" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter">
        <div className="container">
          <Reveal animation="scale">
            <div className="newsletter-box">
              <h2>Stay in the Loop</h2>
              <p>Subscribe to get updates on new dishes, special offers, and upcoming events delivered straight to your inbox.</p>
              {newsletterSent ? (
                <div className="newsletter-success">
                  <CheckCircle2 size={20} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
                  Thank you for subscribing! Watch out for our updates.
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletter}>
                  <input
                    className="newsletter-input"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit" className="btn btn-gold">
                    Subscribe <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section location">
        <div className="container">
          <Reveal animation="up">
            <div className="text-center">
              <span className="section-label">Visit Us</span>
              <h2 className="section-title">Come Dine With Us</h2>
              <p className="section-subtitle mx-auto">
                We are conveniently located and ready to welcome you. Walk in or reserve your table.
              </p>
            </div>
          </Reveal>

          <div className="location-grid">
            <Reveal animation="left">
              <div className="location-info">
                <div className="info-card">
                  <div className="icon"><MapPin size={22} /></div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Maharaja's Cafe and Restaurant<br />Puducherry Road, Tamil Nadu 605001<br />India</p>
                    <a href="https://www.google.com/maps/place/Maharaja%22s+Cafe+and+Restaurant/@11.9269283,79.4805556,17z" target="_blank" rel="noopener noreferrer">View on Google Maps →</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="icon"><Clock size={22} /></div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Monday — Friday: 7:00 AM – 10:30 PM<br />Saturday — Sunday: 6:30 AM – 11:00 PM<br />Kitchen closes 30 minutes before closing</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="icon"><Phone size={22} /></div>
                  <div>
                    <h4>Contact</h4>
                    <p>Phone: <a href="tel:+91413XXXXXXX">+91 413 XXX XXXX</a><br />Email: <a href="mailto:hello@maharajascafe.in">hello@maharajascafe.in</a><br />Walk-ins welcome. Reservations recommended for weekends.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal animation="right">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6!2d79.4805556!3d11.9269283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53576cca748a19%3A0xa786ed0c00caaae4!2sMaharaja%22s%20Cafe%20and%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000"
                  title="Maharaja's Cafe and Restaurant location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
                <span className="nav-logo-mark">M</span>
                Maharaja's
              </a>
              <p>Authentic Indian cuisine served with warmth and tradition since 1998. A taste of home in every bite.</p>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
                <li><a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a></li>
                <li><a href="#offers" onClick={(e) => handleNavClick(e, '#offers')}>Offers</a></li>
                <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Visit</h5>
              <ul>
                <li><a href="#visit" onClick={(e) => handleNavClick(e, '#visit')}>Location</a></li>
                <li><a href="tel:+91413XXXXXXX">Phone</a></li>
                <li><a href="mailto:hello@maharajascafe.in">Email</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Hours</h5>
              <ul>
                <li>Mon–Fri: 7am–10:30pm</li>
                <li>Sat–Sun: 6:30am–11pm</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Maharaja's Cafe and Restaurant. All rights reserved.</span>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
