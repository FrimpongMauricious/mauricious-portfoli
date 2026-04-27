import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import googleITCert   from './assets/Google_IT_Support_cert.pdf'
import itSecurityCert from './assets/IT_security_cert.pdf'
import knustAICert    from './assets/KNUST_AI certificate.pdf'
import cppCert        from './assets/c++ certificate from udemy.pdf'
import cloudCert      from './assets/cloud_computing_certification.pdf'
import osCert         from './assets/operating_system_certificate.pdf'
import pythonCert     from './assets/python_cert_from_devtownn.pdf'
import mentorshipCert from './assets/mentorship certification.jpg'
import programmerCert from './assets/programmer of the year certficate.jpg'
import './App.css'

const NAV = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

const SKILLS = {
  Languages:            ['Python', 'Java', 'JavaScript', 'C', 'C++', 'Dart'],
  'Frontend & Mobile':  ['React', 'React Native', 'Flutter', 'HTML', 'CSS'],
  Backend:              ['Spring Boot', 'Flask (Python)'],
  'Databases':          ['PostgreSQL', 'MySQL'],
  'APIs & Integrations':['OpenAI API', 'Google Maps Platform', 'WebSockets', 'Paystack', 'Hubtel'],
  'Cloud & DevOps':     ['Docker', 'Render', 'Git', 'GitHub'],
}

const EXPERIENCE = [
  {
    role: 'Chief Technology Officer',
    org: 'Lobi — Natura Corporation',
    location: 'North Legon, Accra, Ghana',
    period: 'March 2026 – Present',
    type: 'full-time',
    points: [
      'Lead a cross-functional engineering team of five, overseeing recruitment, task allocation, and delivery timelines for a ride-hailing mobile platform.',
      'Architected the technology stack: React Native (mobile), Spring Boot (backend), Python (tooling), Google Maps Platform (geolocation/routing), Paystack (payments).',
      'Additionally maintain the Natura Corporation corporate website (naturacorporation.com).',
    ],
  },
  {
    role: 'Software Development Intern',
    org: 'Amansie West District CCP Cooperative',
    location: 'Manso Antoakrom, Ashanti Region, Ghana',
    period: 'September 2024 – November 2024',
    type: 'internship',
    points: [
      'Maintained and extended core organisational systems using Python, React Native, and Flutter.',
      'Played a key role in implementing banking software that strengthened financial management and record-keeping processes.',
      'Formally commended by the Manager in a signed letter of recommendation (October 2024).',
    ],
  },
]

const PROJECTS = [
  {
    name: 'ElevateHub',
    subtitle: 'AI-Powered Exam & Interview Prep Platform',
    desc: 'Students upload lecture slides and the AI engine generates targeted preparation questions. Features collaborative real-time quiz rooms for peer study.',
    tags: ['React', 'AI', 'Real-time'],
    live: 'https://elevatehub.guru',
    github: null,
    emoji: '🎓',
    period: 'Nov 2025 – Jan 2026',
  },
  {
    name: 'POS System + PIXA AI',
    subtitle: 'Full-Stack Point of Sale with AI Assistant',
    desc: 'Independently built a complete POS system featuring PIXA, an embedded AI assistant (OpenAI API) for natural-language sales queries. Backend in Flask, UI in Jinja2, data on PostgreSQL.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'OpenAI API'],
    live: 'https://sales-manager-rb3h.onrender.com',
    github: 'https://github.com/FrimpongMauricious/point-of-sales',
    emoji: '🤖',
    period: 'Mar 2026 – Apr 2026',
  },
  {
    name: 'Koinonia',
    subtitle: 'Christian Knowledge-Sharing Mobile App',
    desc: 'Sole developer of a mobile application for Christian knowledge-sharing, with secure authentication, structured content management, and community discussion. Backend in Spring Boot with PostgreSQL.',
    tags: ['Spring Boot', 'PostgreSQL', 'Mobile'],
    live: null,
    github: 'https://github.com/FrimpongMauricious/KOINONIA',
    emoji: '✝️',
    period: 'Feb 2026 – Jun 2026',
  },
  {
    name: 'AgriHub',
    subtitle: 'Full-Stack Agricultural Marketplace',
    desc: 'Project Manager for a departmental team build. Features WebSockets for real-time interaction and Paystack for payment processing, connecting farmers, suppliers, and buyers.',
    tags: ['HTML/CSS', 'WebSockets', 'Paystack'],
    live: 'https://backend-mkvk.onrender.com',
    github: 'https://github.com/AgriHub-group32/frontend',
    emoji: '🌾',
    period: 'Feb 2026 – Mar 2026',
  },
  {
    name: 'ApexLearn',
    subtitle: 'Mobile E-Learning Platform',
    desc: 'Lead engineer on a mobile learning platform where experts publish content and students track progress. Led React Native frontend and UX; supported Spring Boot backend integration.',
    tags: ['React Native', 'Spring Boot'],
    live: null,
    github: 'https://github.com/FrimpongMauricious/group37ApexLearn',
    emoji: '📚',
    period: 'July 2025',
  },
]

const CERTS = [
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    date: '17 May 2025',
    file: googleITCert,
    type: 'pdf',
    accent: '#4285F4',
  },
  {
    title: 'IT Security: Defense Against the Digital Dark Arts',
    issuer: 'Google / Coursera',
    date: '17 May 2025',
    file: itSecurityCert,
    type: 'pdf',
    accent: '#EA4335',
  },
  {
    title: 'AI 150: Responsible Artificial Intelligence for All',
    issuer: 'KNUST AI Coordinating Office',
    date: '14 Mar 2026',
    file: knustAICert,
    type: 'pdf',
    accent: '#34A853',
  },
  {
    title: 'The Complete C & C++ Programming Course',
    issuer: 'Sara Academy / Udemy',
    date: '19 Sep 2024',
    file: cppCert,
    type: 'pdf',
    accent: '#A435F0',
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '1 Feb 2026',
    file: cloudCert,
    type: 'pdf',
    accent: '#0066FF',
  },
  {
    title: 'Operating Systems and You: Becoming a Power User',
    issuer: 'Google / Coursera',
    date: '2025',
    file: osCert,
    type: 'pdf',
    accent: '#FF6B00',
  },
  {
    title: 'Python & Machine Learning Bootcamp',
    issuer: 'DevTown / Google Developer Student Clubs',
    date: '19 Apr 2024',
    file: pythonCert,
    type: 'pdf',
    accent: '#3776AB',
  },
  {
    title: 'Male Programmer of the Year',
    issuer: 'KNUST Dept. of Computer Science',
    date: '2024/2025 Academic Year',
    file: programmerCert,
    type: 'image',
    accent: '#FFD700',
  },
  {
    title: 'Mentorship Committee — Certificate of Appreciation',
    issuer: 'Computer Science Society, KNUST',
    date: '2025',
    file: mentorshipCert,
    type: 'image',
    accent: '#06B6D4',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeCert, setActiveCert] = useState(null)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = (menuOpen || activeCert) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, activeCert])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="pf">

      {/* ── Navbar ── */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            MF<span className="nav__dot">.</span>
          </button>
          <ul className="nav__links">
            {NAV.map(l => (
              <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
            ))}
          </ul>
          <button
            className={`nav__burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
        <div className={`nav__mobile${menuOpen ? ' open' : ''}`}>
          {NAV.map(l => (
            <button key={l} onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="hero">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__inner">
          <div className="hero__text">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              CTO at Lobi &nbsp;·&nbsp; Open to opportunities
            </span>
            <p className="hero__greeting">Hello, I'm</p>
            <h1 className="hero__name">
              Mauricious<br />
              <span className="grad-text">Frimpong</span>
            </h1>
            <p className="hero__role">
              Full-Stack Developer &nbsp;·&nbsp; AI Enthusiast &nbsp;·&nbsp; KNUST Computer Science
            </p>
            <div className="hero__cta">
              <button className="btn btn--primary" onClick={() => scrollTo('Projects')}>View Projects</button>
              <button className="btn btn--outline" onClick={() => scrollTo('Contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" />
            <img src={heroImg} alt="Mauricious Frimpong" className="hero__photo" />
          </div>
        </div>
        <button className="hero__scroll" onClick={() => scrollTo('About')} aria-label="Scroll down">
          <div className="hero__scroll-dot" />
        </button>
      </section>

      {/* ── About ── */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="sec-title">About <span className="grad-text">Me</span></h2>
          <div className="about__grid">
            <div className="about__bio">
              <p>
                I'm a <strong>Computer Science undergraduate at KNUST, Ghana</strong>, pursuing First Class
                Honours, with a proven record of building real-world software that ships. I currently serve
                as <strong>Chief Technology Officer of Lobi</strong>, a ride-hailing platform under Natura
                Corporation, where I lead a team of five engineers.
              </p>
              <p>
                Recognised as <strong>Male Programmer of the Year (2024/2025)</strong> by the KNUST
                Department of Computer Science, and a Top 4 finisher at the West African BeTechConnected
                Hackathon. I'm also Project Coordinator of the{' '}
                <strong>Claude Builder Club at KNUST</strong> — a community of 800+ students — and a
                voluntary BECE tutor and Python content creator on YouTube.
              </p>
              <p>
                I build with React, React Native, Flutter, Spring Boot, Flask, and PostgreSQL, and I
                integrate AI into everything I touch.
              </p>
            </div>
            <div className="about__stats">
              {[
                { val: '5+',  lbl: 'Shipped Projects' },
                { val: '9+',  lbl: 'Certifications' },
                { val: '800+',lbl: 'Club Members Led' },
                { val: '5yrs',lbl: 'Community Tutoring' },
              ].map(s => (
                <div key={s.lbl} className="stat-card">
                  <span className="stat-card__val grad-text">{s.val}</span>
                  <span className="stat-card__lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="section section--alt">
        <div className="container">
          <h2 className="sec-title">Work <span className="grad-text">Experience</span></h2>
          <div className="exp__list">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="exp-card">
                <div className="exp-card__left">
                  <span className={`exp-card__badge exp-card__badge--${e.type}`}>
                    {e.type === 'full-time' ? 'Full-Time' : 'Internship'}
                  </span>
                  <span className="exp-card__period">{e.period}</span>
                  <span className="exp-card__location">{e.location}</span>
                </div>
                <div className="exp-card__right">
                  <h3 className="exp-card__role">{e.role}</h3>
                  <p className="exp-card__org">{e.org}</p>
                  <ul className="exp-card__points">
                    {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
          <div className="projects__grid">
            {PROJECTS.map(p => (
              <div key={p.name} className="project-card">
                <div className="project-card__top">
                  <span className="project-card__emoji">{p.emoji}</span>
                  <span className="project-card__period">{p.period}</span>
                </div>
                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__sub">{p.subtitle}</p>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <div className="project-card__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-link--live">
                      Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link proj-link--gh">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="section section--alt">
        <div className="container">
          <h2 className="sec-title">Technical <span className="grad-text">Skills</span></h2>
          <div className="skills__grid">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="skill-box">
                <h3 className="skill-box__cat">{cat}</h3>
                <div className="skill-box__tags">
                  {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="section">
        <div className="container">
          <h2 className="sec-title">My <span className="grad-text">Certifications</span></h2>
          <p className="sec-sub">Click any card to view the certificate</p>
          <div className="certs__grid">
            {CERTS.map((c, i) => (
              <button
                key={i}
                className="cert-card"
                onClick={() => setActiveCert(c)}
                style={{ '--ca': c.accent }}
              >
                <div className="cert-card__bar" />
                <div className="cert-card__body">
                  <span className="cert-card__badge">CERTIFIED</span>
                  <h3 className="cert-card__title">{c.title}</h3>
                  <p className="cert-card__issuer">{c.issuer}</p>
                  <p className="cert-card__date">{c.date}</p>
                </div>
                <span className="cert-card__cta">View →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section section--alt">
        <div className="container">
          <h2 className="sec-title">Get In <span className="grad-text">Touch</span></h2>
          <p className="sec-sub">Open to opportunities, collaborations, and good conversations.</p>
          <div className="contact__wrap">
            <a href="mailto:frimpongmauricious@gmail.com" className="contact__email">
              frimpongmauricious@gmail.com
            </a>
            <div className="contact__socials">
              <a href="https://linkedin.com/in/mauricious-frimpong" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
              <a href="https://github.com/FrimpongMauricious" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
              <a href="https://youtube.com/@MAURICIOUSFRIMPONG" target="_blank" rel="noreferrer" className="social-btn">YouTube</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Mauricious Frimpong &nbsp;·&nbsp; Built with React &amp; Vite &nbsp;·&nbsp; Kumasi, Ghana</p>
      </footer>

      {/* ── Certificate Modal ── */}
      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <div>
                <h3 className="modal__title">{activeCert.title}</h3>
                <p className="modal__issuer">{activeCert.issuer} &nbsp;·&nbsp; {activeCert.date}</p>
              </div>
              <button className="modal__close" onClick={() => setActiveCert(null)}>✕</button>
            </div>
            <div className="modal__body">
              {activeCert.type === 'pdf'
                ? <object data={activeCert.file} type="application/pdf" className="modal__iframe">
                    <div className="modal__pdf-fallback">
                      <p>Your browser cannot display PDFs inline.</p>
                      <a href={activeCert.file} target="_blank" rel="noreferrer" className="btn btn--ghost">Open PDF</a>
                    </div>
                  </object>
                : <img src={activeCert.file} alt={activeCert.title} className="modal__img" />
              }
            </div>
            <div className="modal__foot">
              <a href={activeCert.file} target="_blank" rel="noreferrer" className="btn btn--ghost">Open in New Tab</a>
              <a href={activeCert.file} download className="btn btn--primary">Download</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
