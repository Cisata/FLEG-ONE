import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

const links = [
  ['Home', '#home'],
  ['Events', '#events'],
  ['How it works', '#how-it-works'],
  ['Rankings', '#rankings'],
  ['About', '#format'],
  ['Contact', '#community'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="F.L.E.G. ONE home">
          <span className="brand__mark">F</span>
          <span>F.L.E.G.<b>ONE</b></span>
        </a>
        <div className="nav__links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <Button href="#events" onClick={closeMenu}>Join event</Button>
        <button className="nav__toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <div className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} id="mobile-navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <Button href="#events" onClick={closeMenu}>Join event</Button>
      </div>
    </header>
  )
}
