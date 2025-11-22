import { navigationLinks } from "../../data/content";
import "./Footer.scss";

const Footer = () => {
    const primaryLinks = navigationLinks.slice(0, 8);
    const secondaryLinks = navigationLinks.slice(8);

    return (
        <footer className="site-footer">
            <div className="container footer__inner">
                <div>
                    <div className="brand brand--foot">
                        <span className="brand__title">HUA OBST</span>
                        <span className="brand__subtitle">ハウオブスト</span>
                    </div>
                    <div className="footer__address">
                        愛知県名古屋市守山区大森三丁目
                        <br />
                        609番地1
                    </div>
                    <div className="footer__tel">
                        TEL:
                        <a href="tel:0529903015" aria-label="電話番号 052-990-3015">
                            052-990-3015
                        </a>
                    </div>
                </div>

                <div className="footer__nav">
                    <h3>リンク</h3>
                    <ul>
                        {primaryLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__nav">
                    <h3>その他</h3>
                    <ul>
                        {secondaryLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <small>Copyright &copy; HUA OBST All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
