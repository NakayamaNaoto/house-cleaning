import { leadMessage } from "../../data/content";
import "./LeadSection.scss";

const LeadSection = () => {
    return (
        <section className="lead-section">
            <div className="container">
                <p className="kicker">CHECK!</p>
                <h2>{leadMessage.title}</h2>
                <div className="lead-section__subtitle">
                    {leadMessage.subtitle.map((line) => (
                        <span key={line}>{line}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadSection;
