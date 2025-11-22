import { contactInfo } from "../../data/content";
import "./ContactCTA.scss";

const ContactCTA = () => {
    return (
        <section className="contact-cta">
            <div className="container contact-cta__inner">
                <div className="contact-cta__message">
                    <p className="desktop-only">{contactInfo.message.desktop}</p>
                    <p className="mobile-only">
                        {contactInfo.message.mobile.map((line, index) => (
                            <span key={line}>
                                {line}
                                {index !== contactInfo.message.mobile.length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="contact-cta__info">
                    <div className="contact-cta__tel">
                        <span>お電話</span>
                        <a href={`tel:${contactInfo.tel.replace(/-/g, "")}`}>{contactInfo.tel}</a>
                    </div>
                    <div className="contact-cta__hours">
                        <span>営業時間</span>
                        <strong>{contactInfo.hours}</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
