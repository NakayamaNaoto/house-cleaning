import { contactInfo } from "../../data/content";
import "./ContactCTA.scss";

const ContactCTA = () => {
    return (
        <section className="contact-cta">
            <div className="container contact-cta__inner">
                <div className="contact-cta__message">
                    <p className="desktop-only">お急ぎの場合は電話窓口まで、お気軽にお問い合わせください。</p>
                    <p className="mobile-only">
                        <span>お急ぎの場合は電話窓口まで、</span>
                        <br />
                        <span>お気軽にお問い合わせください。</span>
                    </p>
                </div>
                <div className="contact-cta__panel">
                    <div className="contact-cta__tel">
                        <span className="contact-cta__icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.77.72 2.58a2 2 0 0 1-.46 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.46c.81.35 1.68.6 2.58.72A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <a href={`tel:${contactInfo.tel.replace(/-/g, "")}`}>{contactInfo.tel}</a>
                    </div>
                    <span className="contact-cta__divider" aria-hidden="true" />
                    <div className="contact-cta__hours">
                        <span className="contact-cta__label">営業時間</span>
                        <span className="contact-cta__value">{contactInfo.hours}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
