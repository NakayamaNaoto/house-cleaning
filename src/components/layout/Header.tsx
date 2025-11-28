import { useState } from "react";
import { primaryLinks, secondaryLinks } from "../../data/content";
import "./Header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`site-header${isMenuOpen ? " site-header--menu-open" : ""}`}>
            <div className="container header__inner">
                <a className="brand" href="/">
                    <span className="brand__title">HUA OBST</span>
                    <span className="brand__subtitle">55リフォーム</span>
                </a>

                <button className="header__menu-toggle" type="button" aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={isMenuOpen} aria-controls="header-menu-content" onClick={toggleMenu}>
                    <span className="header__menu-toggle-bar" aria-hidden="true" />
                    <span className="header__menu-toggle-bar" aria-hidden="true" />
                    <span className="header__menu-toggle-bar" aria-hidden="true" />
                </button>
            </div>

            {isMenuOpen && (
                <div className="header__offcanvas header__offcanvas--open" aria-hidden={!isMenuOpen}>
                    <button className="header__offcanvas-backdrop" type="button" aria-label="メニューを閉じる" onClick={closeMenu} />

                    <div id="header-menu-content" className="header__offcanvas-panel" role="dialog" aria-modal="true" aria-label="メインメニュー">
                        <div className="header__offcanvas-header">
                            <span className="header__offcanvas-title">メニュー</span>
                            <button className="header__offcanvas-close" type="button" onClick={closeMenu} aria-label="メニューを閉じる">
                                閉じる
                            </button>
                        </div>

                        <nav className="main-nav" aria-label="メインメニュー">
                            <ul className="main-nav__list">
                                {primaryLinks.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} onClick={closeMenu}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="main-nav__divider" role="separator" aria-hidden="true" />
                            <ul className="main-nav__list main-nav__list--secondary" aria-label="その他のリンク">
                                {secondaryLinks.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} onClick={closeMenu}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
