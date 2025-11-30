import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__content">
                    <h1>
                        <span>安さで業者を選んでませんか？</span>
                        <span>適正価格で安心なお掃除代行を。</span>
                    </h1>
                    <p className="hero__subline">水回りやエアコン。大切なご自宅に伺うプロ選びは慎重に。</p>
                </div>
                <div className="hero__media">
                    <img src="/images/hero.jpg" alt="ハウスクリーニングの様子" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
