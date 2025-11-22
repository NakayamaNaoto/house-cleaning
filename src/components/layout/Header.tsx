import { navigationLinks, socialLinks } from '../../data/content'

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="brand" href="/">
          <span className="brand__title">HUA OBST</span>
          <span className="brand__subtitle">55リフォーム名古屋店</span>
        </a>

        <nav className="main-nav" aria-label="メインメニュー">
          <ul>
            {navigationLinks.slice(0, 8).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="social-links" aria-label="SNS">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <a className="btn btn--ghost" href="/contact/">
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
