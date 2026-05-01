import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaPlay, FaArrowLeft,
} from 'react-icons/fa'
import programmerCert from './assets/programmer of the year certficate.jpg'
import mentorshipCert from './assets/mentorship certification.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = (d = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren: d } } })
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

// ── Add your photos & videos here ──────────────────────────────────────────
// Images:  { src: importedFile, title, caption, type: 'image', tag }
// Videos:  { src: 'https://www.youtube.com/embed/VIDEO_ID', title, caption, type: 'video', tag }
export const GALLERY = [
  {
    src: programmerCert,
    title: 'Male Programmer of the Year',
    caption: 'Awarded by KNUST Department of Computer Science · 2024/2025 Academic Year',
    type: 'image',
    tag: 'Achievement',
  },
  {
    src: mentorshipCert,
    title: 'Mentorship Certificate of Appreciation',
    caption: 'Computer Science Society, KNUST · 2025',
    type: 'image',
    tag: 'Certificate',
  },
]

export default function Gallery({ onBack }) {
  const [idx, setIdx] = useState(null)

  useEffect(() => {
    document.body.style.overflow = idx !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [idx])

  const prev = () => setIdx(i => (i - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setIdx(i => (i + 1) % GALLERY.length)

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
          <p className="sec-sub" style={{ marginBottom: '40px' }}>
            Moments, milestones, and memories — click any photo to view full size.
          </p>

          <motion.div
            className="gallery__grid"
            variants={stagger()}
            initial="hidden"
            animate="show"
          >
            {GALLERY.map((item, i) => (
              <motion.div
                key={i}
                className="gallery-card"
                variants={fadeUp}
                onClick={() => setIdx(i)}
              >
                {item.type === 'image'
                  ? <img src={item.src} alt={item.title} className="gallery-card__media" />
                  : <iframe src={item.src} title={item.title} className="gallery-card__media" allowFullScreen />
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
        </div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {idx !== null && GALLERY[idx] && (
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
                  <h3 className="modal__title">{GALLERY[idx].title}</h3>
                  <p className="modal__issuer">{GALLERY[idx].caption}</p>
                </div>
                <button className="modal__close" onClick={() => setIdx(null)}><FaTimes /></button>
              </div>
              <div className="lightbox__body">
                {GALLERY[idx].type === 'image'
                  ? <img src={GALLERY[idx].src} alt={GALLERY[idx].title} className="lightbox__img" />
                  : <iframe src={GALLERY[idx].src} title={GALLERY[idx].title} className="lightbox__video" allowFullScreen />
                }
              </div>
              <div className="lightbox__nav">
                <button className="lightbox__btn" onClick={prev}><FaChevronLeft /> Prev</button>
                <span className="lightbox__count">{idx + 1} / {GALLERY.length}</span>
                <button className="lightbox__btn" onClick={next}>Next <FaChevronRight /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
