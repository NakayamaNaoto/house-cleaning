import { heroContent } from "../../data/content";
import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__media">
                    <img src={heroContent.heroImage} alt="ハウスクリーニングの様子" />
                </div>
                <div className="hero__content">
                    <p className="hero__eyebrow">お掃除代行サービス</p>
                    <h1>
                        {heroContent.headline.map((line) => (
                            <span key={line}>{line}</span>
                        ))}
                    </h1>
                    <p className="hero__subline">{heroContent.subline}</p>
                    <div className="hero__cta">
                        <a className="btn" href="https://lin.ee/RZedPno" target="_blank" rel="noreferrer">
                            LINEで無料相談
                        </a>
                        <a className="btn btn--ghost" href="/contact/">
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
