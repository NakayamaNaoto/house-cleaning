import { planCards } from "../../data/content";
import "./PricingSection.scss";

const PricingSection = () => {
    return (
        <section className="pricing">
            <div className="container">
                <header className="section-heading">
                    <p className="kicker">PLAN</p>
                    <h2>
                        お掃除代行セットプラン料金
                        <span>水回りはセットプランでお得に家中ピカピカ！</span>
                    </h2>
                </header>

                <div className="pricing__grid">
                    {planCards.map((plan) => (
                        <article key={plan.label} className="plan-card">
                            <div className="plan-card__media">
                                <img src={plan.image} alt={plan.subtitle} loading="lazy" />
                                <span className="plan-card__label">{plan.label}</span>
                            </div>
                            <div className="plan-card__body">
                                <h3>{plan.title}</h3>
                                <p className="plan-card__subtitle">{plan.subtitle}</p>
                                {plan.body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
