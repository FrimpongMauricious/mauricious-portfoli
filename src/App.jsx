import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import googleITCert from './assets/Google_IT_Support_cert.pdf'
import itSecurityCert from './assets/IT_security_cert.pdf'
import knustAICert from './assets/KNUST_AI certificate.pdf'
import cppCert from './assets/c++ certificate from udemy.pdf'
import cloudCert from './assets/cloud_computing_certification.pdf'
import osCert from './assets/operating_system_certificate.pdf'
import pythonCert from './assets/python_cert_from_devtownn.pdf'
import mentorshipCert from './assets/mentorship certification.jpg'
import programmerCert from './assets/programmer of the year certficate.jpg'
import './App.css'

const NAV = ['About', 'Skills', 'Projects', 'Certifications', 'Contact']

const SKILLS = {
  Languages:       ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
  Frontend:        ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend:         ['Spring Boot', 'Node.js', 'REST APIs'],
  'Cloud & DevOps':['Google Cloud', 'Docker', 'Git', 'Linux'],
  'AI / Security': ['Machine Learning', 'IT Security', 'Data Analysis'],
}

const PROJECTS = [
  {
    name: 'AgriHub',
    desc: 'Full-stack agricultural management platform connecting farmers, suppliers, and buyers with real-time market insights and analytics.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    emoji: '🌾',
  },
  {
    name: 'Koinonia',
    desc: 'Christian knowledge-sharing platform with community discussions, devotionals, and collaborative resource sharing features.',
    tags: ['Spring Boot', 'PostgreSQL', 'REST API'],
    emoji: '✝️',
  },
  {
    name: 'ApexLearn',
    desc: 'Collaborative e-learning platform with real-time chat, interactive quizzes, progress tracking, and peer study rooms.',
    tags: ['React', 'Node.js', 'Docker'],
    emoji: '📚',
  },
  {
    name: 'ElevateHub',
    desc: 'Educational equity platform providing resources, grants, and opportunities for underserved student communities.',
    tags: ['React', 'JavaScript', 'CSS3'],
    emoji: '🚀',
  },
]

const CERTS = [
  { title: 'Google IT Support',                     issuer: 'Google / Coursera',    file: googleITCert,   type: 'pdf',   accent: '#4285F4' },
  { title: 'IT Security: Defense Against Digital Threats', issuer: 'Google / Coursera', file: itSecurityCert, type: 'pdf', accent: '#EA4335' },
  { title: 'AI & Machine Learning',                 issuer: 'KNUST',                file: knustAICert,    type: 'pdf',   accent: '#34A853' },
  { title: 'C++ Programming',                       issuer: 'Udemy',                file: cppCert,        type: 'pdf',   accent: '#A435F0' },
  { title: 'Cloud Computing',                       issuer: 'Coursera',             file: cloudCert,      type: 'pdf',   accent: '#0066FF' },
  { title: 'Operating Systems',                     issuer: 'Coursera',             file: osCert,         type: 'pdf',   accent: '#FF6B00' },
  { title: 'Python Programming',                    issuer: 'DevTown',              file: pythonCert,     type: 'pdf',   accent: '#3776AB' },
  { title: 'Programmer of the Year',                issuer: 'Award Recipient',      file: programmerCert, type: 'image', accent: '#FFD700' },
  { title: 'Mentorship Certification',              issuer: 'Program Graduate',     file: mentorshipCert, type: 'image', accent: '#06B6D4' },
]

export default function App() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeCert, setActiveCert] = useState(null)
  const [scrolled, setScrolled]   = useState(false)

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
              <li key={l}>
                <button onClick={() => scrollTo(l)}>{l}</button>
              </li>
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
              Available for hire
            </span>
            <p className="hero__greeting">Hello, I'm</p>
            <h1 className="hero__name">
              Mauricious<br />
              <span className="grad-text">Frimpong</span>
            </h1>
            <p className="hero__role">
              Full-Stack Developer &nbsp;·&nbsp; AI Enthusiast &nbsp;·&nbsp; Cloud Engineer
            </p>
            <div className="hero__cta">
              <button className="btn btn--primary" onClick={() => scrollTo('Projects')}>View Projects</button>
              <button className="btn btn--outline" onClick={() => scrollTo('Contact')}>Let's Talk</button>
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
                I'm a passionate software developer and Computer Science student at{' '}
                <strong>KNUST, Ghana</strong>. I build full-stack web applications with a focus
                on clean architecture, performance, and user experience.
              </p>
              <p>
                My interests span <strong>AI/ML</strong>, <strong>cloud computing</strong>, and{' '}
                <strong>cybersecurity</strong>. I enjoy solving real-world problems through
                technology — from agricultural platforms to collaborative learning tools.
              </p>
            </div>
            <div className="about__stats">
              {[
                { val: '4+', lbl: 'Projects Built' },
                { val: '9+', lbl: 'Certifications' },
                { val: '5+', lbl: 'Technologies' },
                { val: '∞',  lbl: 'Curiosity' },
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

      {/* ── Projects ── */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
          <div className="projects__grid">
            {PROJECTS.map(p => (
              <div key={p.name} className="project-card">
                <span className="project-card__emoji">{p.emoji}</span>
                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="section section--alt">
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
                </div>
                <span className="cert-card__cta">View →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="sec-title">Get In <span className="grad-text">Touch</span></h2>
          <p className="sec-sub">Open to opportunities, collaborations, and good conversations.</p>
          <div className="contact__wrap">
            <a href="mailto:mfrimpong74@st.knust.edu.gh" className="contact__email">
              mfrimpong74@st.knust.edu.gh
            </a>
            <div className="contact__socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Mauricious Frimpong &nbsp;·&nbsp; Built with React &amp; Vite</p>
      </footer>

      {/* ── Certificate Modal ── */}
      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <div>
                <h3 className="modal__title">{activeCert.title}</h3>
                <p className="modal__issuer">{activeCert.issuer}</p>
              </div>
              <button className="modal__close" onClick={() => setActiveCert(null)}>✕</button>
            </div>
            <div className="modal__body">
              {activeCert.type === 'pdf'
                ? <iframe src={activeCert.file} title={activeCert.title} className="modal__iframe" />
                : <img src={activeCert.file} alt={activeCert.title} className="modal__img" />
              }
            </div>
            <div className="modal__foot">
              <a href={activeCert.file} download className="btn btn--primary">Download Certificate</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
