import { useState } from "react";
import { navigationLinks, socialLinks } from "../../data/content";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="container header__inner">
                <a className="brand" href="/">
                    <span className="brand__title">HUA OBST</span>
                    <span className="brand__subtitle">55リフォーム名古屋庁E</span>
                </a>

                <button className="header__menu-toggle" type="button" aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={isMenuOpen} aria-controls="header-menu-content" onClick={toggleMenu}>
                    <span className="header__menu-toggle-bar" aria-hidden="true" />
                    <span className="header__menu-toggle-bar" aria-hidden="true" />
                    <span className="header__menu-toggle-bar" aria-hidden="true" />
                </button>

                <div id="header-menu-content" className={`header__menu${isMenuOpen ? " header__menu--open" : ""}`} hidden={!isMenuOpen}>
                    <nav className="main-nav" aria-label="メインメニュー">
                        <ul>
                            {navigationLinks.slice(0, 8).map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={closeMenu}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header__actions">
                        <div className="social-links" aria-label="SNS">
                            {socialLinks.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" onClick={closeMenu}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <a className="btn btn--ghost" href="/contact/" onClick={closeMenu}>
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
