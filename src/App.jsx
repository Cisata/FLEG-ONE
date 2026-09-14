import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, Crosshair, Trophy, Zap } from 'lucide-react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import SectionHeader from './components/SectionHeader'
import EventCard from './components/EventCard'
import PlayerCard from './components/PlayerCard'
import RankingRow from './components/RankingRow'
import Footer from './components/Footer'
import { events } from './data/events'
import { players } from './data/players'
import { rankings } from './data/rankings'
import { gallery } from './data/gallery'

const steps = [
  { number: '01', title: 'Lock in your spot', copy: 'Choose your city, register your name, and show up ready.', icon: Crosshair },
  { number: '02', title: 'Enter the duel', copy: 'One pitch. One opponent. Every touch takes you closer.', icon: Zap },
  { number: '03', title: 'Climb the bracket', copy: 'Win your matches, keep your composure, and advance.', icon: ArrowRight },
  { number: '04', title: 'Take the crown', copy: 'The final whistle decides who owns the city.', icon: Trophy },
]

function App() {
  const [notice, setNotice] = useState('')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3200)
  }

  const handleCommunitySubmit = (event) => {
    event.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setFormMessage('Enter a valid email address to join the community.')
      return
    }
    setFormMessage('You are on the list. We will see you at the next drop.')
    setEmail('')
  }

  return (
    <div className="app-shell">
      <Navbar />
      {notice && <div className="toast" role="status"><Check size={17} />{notice}</div>}

      <main>
        <section className="hero" id="home">
          <div className="hero__image" aria-hidden="true" />
          <div className="hero__shade" aria-hidden="true" />
          <div className="shell hero__content">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--lime">Nagaland's 1v1 football platform</span>
              <h1>One player.<br /><em>One opponent.</em><br />One winner.</h1>
              <p>Step onto the pitch and prove yourself in competitive 1v1 football events across Nagaland.</p>
              <div className="hero__actions">
                <Button href="#events">Join an event</Button>
                <a className="text-link text-link--light" href="#format">Explore the format <ArrowDown size={16} /></a>
              </div>
            </div>
            <div className="hero__event">
              <span className="eyebrow">Next event</span>
              <strong>Dimapur, Nagaland</strong>
              <div className="hero__event-meta"><span>24 OCT 2026</span><span>32 PLAYERS</span></div>
              <div className="hero__event-line" />
              <span className="hero__event-note"><Clock3 size={14} /> Registration is open</span>
            </div>
          </div>
          <div className="hero__scroll"><span>Scroll to explore</span><ArrowDown size={16} /></div>
        </section>

        <section className="section section--paper" id="events">
          <div className="shell">
            <div className="section-heading-row"><SectionHeader eyebrow="The circuit" title="Pick your pitch." copy="Three cities. One standard. Find the next place to make your mark." /><span className="section-index">01 / 06</span></div>
            <div className="events-grid">
              {events.map((event) => <EventCard key={event.id} event={event} onRegister={() => showNotice(event.status === 'Registration open' ? 'Registration interest noted. We will be in touch.' : 'We will notify you when this event opens.')} />)}
            </div>
          </div>
        </section>

        <section className="section section--ink" id="how-it-works">
          <div className="shell">
            <div className="section-heading-row"><SectionHeader eyebrow="No shortcuts" title="The rules are simple." copy="The pressure is not." /><span className="section-index section-index--muted">02 / 06</span></div>
            <div className="steps-grid">
              {steps.map(({ number, title, copy, icon: Icon }) => <article className="step" key={number}><div className="step__top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="format-section" id="format">
          <div className="format-section__pitch" aria-label="Illustration of a 1v1 football pitch"><span className="pitch__line pitch__line--mid" /><span className="pitch__circle" /><span className="pitch__goal pitch__goal--top" /><span className="pitch__goal pitch__goal--bottom" /><span className="pitch__player pitch__player--one">1</span><span className="pitch__player pitch__player--two">2</span></div>
          <div className="format-section__copy"><span className="eyebrow">The 1v1 format</span><h2>Small space.<br /><em>Big statement.</em></h2><p>Fast feet, sharp decisions, no place to hide. Matches are short, intense, and decided by the player who wants it more.</p><ul>{['One player vs one player', 'Limited match time', 'Knockout tournament', 'Goals decide the winner'].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a className="text-link" href="#rankings">See the rankings <ArrowRight size={16} /></a></div>
        </section>

        <section className="section section--paper" id="players">
          <div className="shell"><div className="section-heading-row"><SectionHeader eyebrow="The contenders" title="Know the names." copy="The players setting the pace across Nagaland's 1v1 scene." /><span className="section-index">03 / 06</span></div><div className="players-grid">{players.map((player) => <PlayerCard key={player.id} player={player} />)}</div></div>
        </section>

        <section className="section section--cream" id="rankings">
          <div className="shell"><div className="section-heading-row"><SectionHeader eyebrow="The leaderboard" title="Earn your place." copy="Every win counts. Every goal travels." /><span className="section-index">04 / 06</span></div><div className="rankings-table" role="table" aria-label="F.L.E.G. ONE player rankings"><div className="ranking-row ranking-row--header" role="row"><span role="columnheader">Rank</span><span role="columnheader">Player</span><span role="columnheader">Wins</span><span role="columnheader">Goals</span><span role="columnheader">Points</span></div>{rankings.map((player) => <RankingRow key={player.playerId} player={player} />)}</div></div>
        </section>

        <section className="section section--paper gallery-section" id="highlights">
          <div className="shell"><div className="section-heading-row"><SectionHeader eyebrow="The archive" title="Proof looks good." copy="A few frames from the football, the noise, and everything in between." /><span className="section-index">05 / 06</span></div><div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item--${index + 1}`} key={item.id}><img src={item.image} alt={item.label} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=85' }} /><figcaption>{item.label}<ArrowUpRight size={16} /></figcaption></figure>)}</div></div>
        </section>

        <section className="previous-event"><div className="previous-event__image" aria-hidden="true" /><div className="previous-event__copy shell"><span className="eyebrow eyebrow--lime">Last time out / Dimapur</span><h2>Asa took<br /><em>the city.</em></h2><div className="final-score"><span>Final</span><strong>5 <i>—</i> 3</strong><span>F.L.E.G. ONE / 2026</span></div><p>Some players wait for their moment. Champions make it happen.</p><a className="text-link text-link--light" href="#events">Enter the next one <ArrowRight size={16} /></a></div></section>

        <section className="community section" id="community"><div className="shell community__inner"><div><span className="eyebrow eyebrow--lime">Stay in the loop</span><h2>Next event.<br /><em>Your move.</em></h2></div><div className="community__form-wrap"><p>Get notified when a new F.L.E.G. ONE event drops in Dimapur and across Nagaland.</p><form className="community__form" onSubmit={handleCommunitySubmit}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" aria-describedby="form-message" /><button type="submit">Join community <ArrowUpRight size={17} /></button></form><p className="form-message" id="form-message" role="status">{formMessage}</p></div></div></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
