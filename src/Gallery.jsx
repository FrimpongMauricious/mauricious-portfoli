import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaPlay, FaArrowLeft,
} from 'react-icons/fa'

// ── Images ──────────────────────────────────────────────────────────────────
import maleProgrammerYear    from './assets/gallery/male prgrammer of the year.jpeg'
import receivingCertCS       from './assets/gallery/receiving certificate for performing well in Computer science hachathon.jpeg'
import picWithTob            from './assets/gallery/pic wiht tob after winning programmer of the year.jpeg'
import programmerCert        from './assets/programmer of the year certficate.jpg'
import mentorshipCert        from './assets/mentorship certification.jpg'
import soloFOW               from './assets/gallery/solo presentation at FOW hackathon.jpeg'
import presentingChristabell from './assets/gallery/presenting with christabell.jpeg'
import judgeStage            from './assets/gallery/the judge on stage with us.jpeg'
import presentingFOW         from './assets/gallery/presenting at future of work hackathon.jpeg'
import arrivedUG             from './assets/gallery/when we arrive for the hackathon in UG.jpeg'
import groupCSHack           from './assets/gallery/group pic at CS hackathon.jpeg'
import codequest             from './assets/gallery/codeqeust hackathon.jpeg'
import soloDigivibe          from './assets/gallery/solo pic at digivibe.jpeg'
import digivibeWithMeshack   from './assets/gallery/digivibe with meshack.jpeg'
import wa2950                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.29.50.jpeg'
import apexlearn             from './assets/gallery/apexlearn presentation.jpeg'
import claudeBuilderClub     from './assets/gallery/claude builder club project cordinator.jpeg'
import quizTeam              from './assets/gallery/quiz team group picture.jpeg'
import sundaySchool          from './assets/gallery/sunday school teacher.jpeg'
import teachingAssistant     from './assets/gallery/teaching assistant.jpeg'
import profilePic1           from './assets/gallery/profile pic 1.jpeg'
import profilePic2           from './assets/gallery/profile picture 2.jpeg'
import pictureInSuit         from './assets/gallery/picture in suit.jpeg'
import childhood             from './assets/gallery/childhood picture.jpeg'
import passport              from './assets/maur_passport_picture.jpeg'
import wa5301                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.30.53 (1).jpeg'
import wa5401                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.30.54 (1).jpeg'
import wa5500                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.30.55.jpeg'
import wa5501                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.30.55 (1).jpeg'
import wa5502                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.30.55 (2).jpeg'
import wa5701                from './assets/gallery/WhatsApp Image 2026-05-01 at 01.30.57 (1).jpeg'

// ── Videos ──────────────────────────────────────────────────────────────────
import nsmqCaptain        from './assets/gallery/NSMQ captain.mp4'
import wonProgrammerYear  from './assets/gallery/won the programmer of the year.mp4'

// ── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = (d = 0.06) => ({ hidden: {}, show: { transition: { staggerChildren: d } } })
const overlayV = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.25 } },
  exit:   { opacity: 0, transition: { duration: 0.2 } },
}
const modalV = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  show:   { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, scale: 0.95, y: 24, transition: { duration: 0.22 } },
}

// ── Gallery data ─────────────────────────────────────────────────────────────
export const GALLERY = [
  // Achievements
  { src: maleProgrammerYear,  title: 'Male Programmer of the Year',                     caption: 'KNUST Department of Computer Science · 2024/2025 Academic Year', type: 'image', tag: 'Achievement' },
  { src: wonProgrammerYear,   title: 'Winning Programmer of the Year',                   caption: 'The moment the award was announced · KNUST, 2025',              type: 'video', tag: 'Achievement' },
  { src: picWithTob,          title: 'With Tob After Winning Programmer of the Year',    caption: 'Celebrating after receiving the award · KNUST, 2025',           type: 'image', tag: 'Achievement' },
  { src: receivingCertCS,     title: 'Certificate for Excellence at CS Hackathon',       caption: 'Receiving recognition for outstanding performance',             type: 'image', tag: 'Achievement' },
  { src: wa5301,              title: 'Programmer of the Year Ceremony',                  caption: 'Award ceremony · KNUST Department of Computer Science, 2025',   type: 'image', tag: 'Achievement' },
  { src: wa5401,              title: 'Programmer of the Year Ceremony',                  caption: 'Award ceremony · KNUST Department of Computer Science, 2025',   type: 'image', tag: 'Achievement' },
  { src: wa5500,              title: 'Programmer of the Year Ceremony',                  caption: 'Award ceremony · KNUST Department of Computer Science, 2025',   type: 'image', tag: 'Achievement' },
  { src: wa5501,              title: 'Programmer of the Year Ceremony',                  caption: 'Award ceremony · KNUST Department of Computer Science, 2025',   type: 'image', tag: 'Achievement' },
  { src: wa5502,              title: 'Programmer of the Year Ceremony',                  caption: 'Award ceremony · KNUST Department of Computer Science, 2025',   type: 'image', tag: 'Achievement' },
  { src: wa5701,              title: 'Programmer of the Year Ceremony',                  caption: 'Award ceremony · KNUST Department of Computer Science, 2025',   type: 'image', tag: 'Achievement' },

  // Certificates
  { src: programmerCert,     title: 'Male Programmer of the Year Certificate',           caption: 'Officially awarded by KNUST Dept. of Computer Science · 2024/2025', type: 'image', tag: 'Certificate' },
  { src: mentorshipCert,     title: 'Mentorship Certificate of Appreciation',             caption: 'Computer Science Society, KNUST · 2025',                            type: 'image', tag: 'Certificate' },

  // Hackathons
  { src: soloFOW,            title: 'Solo Presentation — Future of Work Hackathon',     caption: 'Pitching solo at the FOW Hackathon',              type: 'image', tag: 'Hackathon' },
  { src: presentingFOW,      title: 'Presenting at Future of Work Hackathon',            caption: 'Team presentation at the FOW Hackathon',          type: 'image', tag: 'Hackathon' },
  { src: presentingChristabell, title: 'Presenting with Christabell',                   caption: 'Joint presentation at a hackathon event',         type: 'image', tag: 'Hackathon' },
  { src: judgeStage,         title: 'On Stage with the Judge',                           caption: 'Live feedback from judges at the hackathon',      type: 'image', tag: 'Hackathon' },
  { src: groupCSHack,        title: 'Team Photo — CS Hackathon',                         caption: 'Group picture with teammates at the CS Hackathon', type: 'image', tag: 'Hackathon' },
  { src: arrivedUG,          title: 'Arrived at UG for the Hackathon',                   caption: 'At the University of Ghana campus for the event', type: 'image', tag: 'Hackathon' },
  { src: codequest,          title: 'CodeQuest Hackathon',                               caption: 'Competing at the CodeQuest Hackathon',            type: 'image', tag: 'Hackathon' },
  { src: wa2950,             title: 'Hackathon Moment',                                  caption: 'Captured during a hackathon event',               type: 'image', tag: 'Hackathon' },

  // Leadership
  { src: claudeBuilderClub,  title: 'Claude Builder Club — Project Coordinator',        caption: 'Leading the Claude Builder Club at KNUST · 800+ student community', type: 'image', tag: 'Leadership' },
  { src: quizTeam,           title: 'KNUST Quiz Team',                                  caption: 'Group photo with the quiz team',                                    type: 'image', tag: 'Leadership' },
  { src: nsmqCaptain,        title: 'NSMQ Captain',                                     caption: 'Serving as NSMQ team captain',                                      type: 'video', tag: 'Leadership' },

  // Community
  { src: sundaySchool,       title: 'Sunday School Teacher',                            caption: 'Volunteering as a Sunday school teacher in the community',  type: 'image', tag: 'Community' },
  { src: teachingAssistant,  title: 'Teaching Assistant',                               caption: 'Serving as a teaching assistant at KNUST',                  type: 'image', tag: 'Community' },

  // Events
  { src: apexlearn,          title: 'ApexLearn Project Presentation',                   caption: 'Presenting the ApexLearn e-learning platform at a department showcase', type: 'image', tag: 'Event' },
  { src: soloDigivibe,       title: 'Solo at DigiVibe',                                 caption: 'Representing at DigiVibe, a tech & innovation event',                   type: 'image', tag: 'Event' },
  { src: digivibeWithMeshack, title: 'DigiVibe with Meshack',                           caption: 'With Meshack at the DigiVibe event',                                    type: 'image', tag: 'Event' },

  // Personal
  { src: passport,           title: 'Official Headshot',                                caption: '', type: 'image', tag: 'Personal' },
  { src: pictureInSuit,      title: 'Professional',                                     caption: '', type: 'image', tag: 'Personal' },
  { src: profilePic1,        title: 'Profile',                                          caption: '', type: 'image', tag: 'Personal' },
  { src: profilePic2,        title: 'Profile',                                          caption: '', type: 'image', tag: 'Personal' },
  { src: childhood,          title: 'Childhood Memory',                                 caption: 'Where the journey began', type: 'image', tag: 'Personal' },
]

const TAGS = ['All', 'Achievement', 'Certificate', 'Hackathon', 'Leadership', 'Community', 'Event', 'Personal']

export default function Gallery({ onBack }) {
  const [activeTag, setActiveTag] = useState('All')
  const [idx, setIdx]             = useState(null)

  const filtered = activeTag === 'All' ? GALLERY : GALLERY.filter(g => g.tag === activeTag)

  useEffect(() => {
    document.body.style.overflow = idx !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [idx])

  // reset idx when filter changes
  useEffect(() => { setIdx(null) }, [activeTag])

  const prev = () => setIdx(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setIdx(i => (i + 1) % filtered.length)

  return (
    <>
      <motion.div
        className="gallery-page"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="gallery-page__top">
            <button className="gallery-page__back" onClick={onBack}>
              <FaArrowLeft /> Back to Portfolio
            </button>
          </div>

          <h2 className="sec-title" style={{ marginBottom: '8px' }}>
            My <span className="grad-text">Gallery</span>
          </h2>
          <p className="sec-sub" style={{ marginBottom: '28px' }}>
            Moments, milestones, and memories — click any item to view full size.
          </p>

          {/* Filter tabs */}
          <div className="gallery-filters">
            {TAGS.map(tag => (
              <button
                key={tag}
                className={`gallery-filter-btn${activeTag === tag ? ' active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              className="gallery__grid"
              variants={stagger()}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={i}
                  className="gallery-card"
                  variants={fadeUp}
                  onClick={() => setIdx(i)}
                >
                  {item.type === 'image'
                    ? <img src={item.src} alt={item.title} className="gallery-card__media" />
                    : <video src={item.src} className="gallery-card__media" preload="metadata" muted playsInline />
                  }
                  <div className="gallery-card__overlay">
                    <span className="gallery-card__tag">{item.tag}</span>
                    <p className="gallery-card__title">{item.title}</p>
                    <span className="gallery-card__icon">
                      {item.type === 'video' ? <FaPlay /> : <FaExpand />}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {idx !== null && filtered[idx] && (
          <motion.div
            className="modal-overlay"
            variants={overlayV}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setIdx(null)}
          >
            <motion.div
              className="lightbox"
              variants={modalV}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <div className="lightbox__header">
                <div>
                  <h3 className="modal__title">{filtered[idx].title}</h3>
                  {filtered[idx].caption && <p className="modal__issuer">{filtered[idx].caption}</p>}
                </div>
                <button className="modal__close" onClick={() => setIdx(null)}><FaTimes /></button>
              </div>
              <div className="lightbox__body">
                {filtered[idx].type === 'image'
                  ? <img src={filtered[idx].src} alt={filtered[idx].title} className="lightbox__img" />
                  : <video src={filtered[idx].src} className="lightbox__video" controls autoPlay />
                }
              </div>
              <div className="lightbox__nav">
                <button className="lightbox__btn" onClick={prev}><FaChevronLeft /> Prev</button>
                <span className="lightbox__count">{idx + 1} / {filtered.length}</span>
                <button className="lightbox__btn" onClick={next}>Next <FaChevronRight /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
