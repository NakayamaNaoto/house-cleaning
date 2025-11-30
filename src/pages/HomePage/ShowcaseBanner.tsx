import "./ShowcaseBanner.scss";

const ShowcaseBanner = () => {
    return (
        <section className="showcase-banner" aria-label="お掃除代行のご案内">
            <div className="showcase-banner__bg" aria-hidden="true">
                <img src="/images/feature-1.jpg" alt="" loading="lazy" />
                <span className="showcase-banner__overlay" />
            </div>
            <div className="container showcase-banner__inner">
                <div className="showcase-banner__copy">
                    <h2>
                        <p>
                            水回りやキッチン、エアコン等々
                            <br />
                            頑固な汚れもお掃除代行でピカピカに！
                        </p>
                    </h2>
                    <div className="showcase-banner__subtext">
                        <p>
                            一か所から承ります！
                            <br />
                            ハウスクリーニングのプロが無料出張で駆けつけます！
                        </p>
                    </div>
                </div>
                <div className="showcase-banner__card">
                    <div className="showcase-banner__card-body">
                        <p className="showcase-banner__card-label">お掃除代行</p>
                        <p className="showcase-banner__card-lead">お問い合わせはこちら↓</p>
                        <p className="showcase-banner__card-note">55リフォーム名古屋店</p>
                        <div>
                            <a className="btn showcase-banner__card-btn" href="/contact/">
                                お問い合わせ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseBanner;
