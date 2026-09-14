export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <a className="brand" href="#home" aria-label="F.L.E.G. ONE home">
          <span className="brand__mark">F</span>
          <span>F.L.E.G.<b>ONE</b></span>
        </a>
        <p>Built for players who would rather prove it than say it.</p>
        <div className="footer__socials" aria-label="Social media links">
          <a href="https://www.instagram.com" aria-label="Instagram">IG</a>
          <a href="https://www.youtube.com" aria-label="YouTube">YT</a>
          <a href="https://www.tiktok.com" aria-label="TikTok" className="tiktok">♪</a>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© 2026 F.L.E.G. ONE</span>
        <div><a href="#community">Community</a><a href="#home">Privacy</a><a href="#home">Terms</a></div>
      </div>
    </footer>
  )
}
