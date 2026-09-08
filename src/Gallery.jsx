import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaPlay, FaArrowLeft, FaFilePdf,
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

// ── VoiceUp Hackathon (Claude Builders Club × Anthropic × KNUST AI) ─────────
import voiceupDebugging       from './assets/gallery/Debugging_project.jpg'
import voiceupTeammates       from './assets/gallery/with_my_teamMates.jpg'
import voiceupSoloShot        from './assets/gallery/single_shot_at_hackathon.jpg'
import voiceupGroupApex       from './assets/gallery/group_pic_with_apex404.jpg'
import voiceupJudges          from './assets/gallery/with_the_judges.jpg'
import voiceupChristabel      from './assets/gallery/with_my_female_friend_Christabel.jpg'
import voiceupKelvin          from './assets/gallery/with_my_friend_kelvin.jpg'
import voiceupAmbassador      from './assets/gallery/with_the_club_ambassador.jpg'
import voiceupMedal           from './assets/gallery/receiving_medal_after_winning.jpg'
import voiceupTeamMedal       from './assets/gallery/group_team_with_the_medal.jpg'
import voiceupTeamName        from './assets/gallery/group_pic_showing_ourTeam_name.jpg'
import voiceupAllWinners      from './assets/gallery/pic_with_the_entire_winners.jpg'

// ── AmaliTech Immersive Internship Programme ─────────────────────────────────
import amalitechOfferLetter from './assets/Mauricious Frimpong_AmaliTech_IIP_Offer_signed.pdf'
import amalitechSoloOffice  from './assets/gallery/solo_pic_at_amalitech_office_in Kumasi_as_intern.jpg'
import amalitechWithAddison from './assets/gallery/picture_with_me_and_addison_at_amalitech_internship.jpg'
import amalitechRandomPic   from './assets/gallery/random_pic_at_amalitech.jpg'
import amalitechCoreValues  from './assets/gallery/solo_standing_pick_facing_core_values_of_amalitech.jpg'

// ── Execute Africa AI Challenge Hackathon (Vector AI Africa Week) ───────────
import execAfricaTeammate   from './assets/gallery/picture_with_my_teammate_at_execute_africa_ai_hackathon.jpg'
import execAfricaPresenting from './assets/gallery/presenting_to_the_judges_at_execute_africa_ai_challenge_hackathon.jpg'
import execAfricaAlxLogo    from './assets/gallery/solo_pick_at_execute_africa_ai_hackathon_facing_the_alx_logo.jpg'
import execAfricaSoloRandom from './assets/gallery/solo_random_pic_at_hackathon_execute_africa_ai.jpg'
import execAfricaOrganiser  from './assets/gallery/video_of_the organiser_giving_instructions_of_execute_africa_hackathon.mp4'

// ── Videos ──────────────────────────────────────────────────────────────────
import wonProgrammerYear  from './assets/gallery/won the programmer of the year.mp4'
import nsmqOnStage        from './assets/gallery/sitting on stage at NSMQ.mp4'

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
  { src: voiceupMedal,       title: 'VoiceUp — Hackathon Win',                           caption: 'Receiving the winner\'s medal · Claude Builders Club Hackathon powered by Anthropic & KNUST AI · 2026', type: 'image', tag: 'Achievement' },
  { src: voiceupTeamMedal,   title: 'Team Apex-404 — Hackathon Winners',                 caption: 'Claude Builders Club Hackathon · KNUST, 2026',                   type: 'image', tag: 'Achievement' },
  { src: execAfricaPresenting, title: 'Execute Africa AI Challenge Hackathon — Finalist', caption: 'Team project selected for the final stage · Vector AI Africa Week, Palm Eagles Hotel, Accra · Sept 2026', type: 'image', tag: 'Achievement' },

  // Certificates
  { src: programmerCert,     title: 'Male Programmer of the Year Certificate',           caption: 'Officially awarded by KNUST Dept. of Computer Science · 2024/2025', type: 'image', tag: 'Certificate' },
  { src: mentorshipCert,     title: 'Mentorship Certificate of Appreciation',             caption: 'Computer Science Society, KNUST · 2025',                            type: 'image', tag: 'Certificate' },

  // Hackathons — VoiceUp · Claude Builders Club Hackathon (Anthropic × KNUST AI)
  { src: voiceupMedal,       title: 'Receiving the Winner\'s Medal — VoiceUp',          caption: 'Claude Builders Club Hackathon powered by Anthropic & KNUST AI · 2026', type: 'image', tag: 'Hackathon' },
  { src: voiceupTeamMedal,   title: 'Team Apex-404 with the Medal',                     caption: 'VoiceUp — Claude Builders Club Hackathon · KNUST, 2026',                type: 'image', tag: 'Hackathon' },
  { src: voiceupTeamName,    title: 'Team Apex-404',                                    caption: 'VoiceUp — Claude Builders Club Hackathon · KNUST, 2026',                type: 'image', tag: 'Hackathon' },
  { src: voiceupAllWinners,  title: 'All Winners — Claude Builders Club Hackathon',     caption: 'Claude Builders Club Hackathon powered by Anthropic & KNUST AI · 2026', type: 'image', tag: 'Hackathon' },
  { src: voiceupGroupApex,   title: 'Group Photo — Team Apex-404',                      caption: 'VoiceUp hackathon team photo · KNUST, 2026',                            type: 'image', tag: 'Hackathon' },
  { src: voiceupJudges,      title: 'With the Judges',                                  caption: 'Post-pitch with the panel of judges · VoiceUp Hackathon, 2026',         type: 'image', tag: 'Hackathon' },
  { src: voiceupAmbassador,  title: 'With the Club Ambassador',                         caption: 'Claude Builders Club · KNUST, 2026',                                    type: 'image', tag: 'Hackathon' },
  { src: voiceupTeammates,   title: 'With My Teammates',                                caption: 'Building VoiceUp together · Claude Builders Club Hackathon, 2026',      type: 'image', tag: 'Hackathon' },
  { src: voiceupDebugging,   title: 'Debugging the Project',                            caption: 'In the zone — debugging VoiceUp during the hackathon',                  type: 'image', tag: 'Hackathon' },
  { src: voiceupSoloShot,    title: 'Solo Shot at the Hackathon',                       caption: 'Claude Builders Club Hackathon · KNUST, 2026',                          type: 'image', tag: 'Hackathon' },
  { src: voiceupChristabel,  title: 'With Christabel',                                  caption: 'At the Claude Builders Club Hackathon · KNUST, 2026',                   type: 'image', tag: 'Hackathon' },
  { src: voiceupKelvin,      title: 'With Kelvin',                                      caption: 'At the Claude Builders Club Hackathon · KNUST, 2026',                   type: 'image', tag: 'Hackathon' },

  // Hackathons — Execute Africa AI Challenge Hackathon (Vector AI Africa Week) — Finalist
  { src: execAfricaTeammate,   title: 'Picture With My Teammate at Execute Africa AI Hackathon',                caption: 'Execute Africa AI Challenge Hackathon · Palm Eagles Hotel, Accra · Sept 2026', type: 'image', tag: 'Hackathon' },
  { src: execAfricaPresenting, title: 'Presenting to the Judges at Execute Africa AI Challenge Hackathon',      caption: 'Pitching our finalist project · Execute Africa AI Challenge Hackathon, Accra · Sept 2026', type: 'image', tag: 'Hackathon' },
  { src: execAfricaAlxLogo,    title: 'Solo Pic at Execute Africa AI Hackathon Facing the ALX Logo',            caption: 'Execute Africa AI Challenge Hackathon · Palm Eagles Hotel, Accra · Sept 2026', type: 'image', tag: 'Hackathon' },
  { src: execAfricaSoloRandom, title: 'Solo Random Pic at the Execute Africa AI Hackathon',                     caption: 'Execute Africa AI Challenge Hackathon · Palm Eagles Hotel, Accra · Sept 2026', type: 'image', tag: 'Hackathon' },
  { src: execAfricaOrganiser,  title: 'Organiser Giving Instructions at the Execute Africa Hackathon',          caption: 'Briefing before the pitch session · Execute Africa AI Challenge Hackathon, Accra · Sept 2026', type: 'video', tag: 'Hackathon' },

  // AmaliTech Immersive Internship Programme — Offer Accepted (Front End Developer Intern, React Native track)
  { src: amalitechOfferLetter, title: 'AmaliTech Immersive Internship Programme — Offer Accepted', caption: 'Offer of admission after HR screening, a CodeSignal assessment, and a behavioral + technical interview · Front End Developer Intern (React Native track), Kumasi · Started 7 Sept 2026', type: 'pdf', tag: 'Achievement' },
  { src: amalitechSoloOffice,  title: 'Solo Pic at AmaliTech Office in Kumasi as Intern',        caption: 'On-site at the AmaliTech office · Kumasi, Ghana · Sept 2026',    type: 'image', tag: 'Achievement' },
  { src: amalitechWithAddison, title: 'Picture With Me and Addison at AmaliTech Internship',     caption: 'AmaliTech Immersive Internship Programme · Kumasi, Ghana · Sept 2026', type: 'image', tag: 'Achievement' },
  { src: amalitechRandomPic,   title: 'Random Pic at AmaliTech',                                 caption: 'AmaliTech Immersive Internship Programme · Kumasi, Ghana · Sept 2026', type: 'image', tag: 'Achievement' },
  { src: amalitechCoreValues,  title: 'Solo Standing Pic Facing Core Values of AmaliTech',       caption: 'AmaliTech Immersive Internship Programme · Kumasi, Ghana · Sept 2026', type: 'image', tag: 'Achievement' },

  // Hackathons — other
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
  { src: nsmqOnStage,        title: 'Sitting on Stage at NSMQ',                         caption: 'Serving as Quiz Captain on the NSMQ stage',                         type: 'video', tag: 'Leadership' },

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
                    ? <img src={item.src} alt={item.title} className="gallery-card__media" loading="lazy" />
                    : item.type === 'video'
                    ? <video src={item.src} className="gallery-card__media" preload="none" muted playsInline />
                    : <div className="gallery-card__media gallery-card__pdf-thumb"><FaFilePdf /></div>
                  }
                  <div className="gallery-card__overlay">
                    <span className="gallery-card__tag">{item.tag}</span>
                    <p className="gallery-card__title">{item.title}</p>
                    <span className="gallery-card__icon">
                      {item.type === 'video' ? <FaPlay /> : item.type === 'pdf' ? <FaFilePdf /> : <FaExpand />}
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
                  : filtered[idx].type === 'video'
                  ? <video src={filtered[idx].src} className="lightbox__video" controls autoPlay />
                  : (
                    <object data={filtered[idx].src} type="application/pdf" className="lightbox__pdf">
                      <div className="modal__pdf-fallback">
                        <p>Your browser cannot display PDFs inline.</p>
                        <a href={filtered[idx].src} target="_blank" rel="noreferrer" className="btn btn--ghost">Open PDF</a>
                      </div>
                    </object>
                  )
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
