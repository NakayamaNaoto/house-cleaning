import { featureCards } from "../../data/content";
import "./StrengthsSection.scss";

const StrengthsSection = () => {
    return (
        <section className="strengths">
            <div className="container">
                <header className="section-heading">
                    <h2>
                        55リフォーム名古屋店のここがすごい！
                        <span>キッチンや水回り、エアコン…長年の汚れもピカピカに！</span>
                    </h2>
                </header>

                <div className="strengths__grid">
                    {featureCards.map((feature) => (
                        <article key={feature.title} className="feature-card">
                            <div className="feature-card__text">
                                <h3>{feature.title}</h3>
                                {feature.body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="feature-card__media">
                                <img src={feature.image} alt={feature.title} loading="lazy" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;
