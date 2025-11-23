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

                <div className="pricing__list">
                    <article className="plan-card">
                        <div className="plan-card__media">
                            <img src="/images/plan-1.jpg" alt="お掃除代行3点セット" loading="lazy" />
                            <span className="plan-card__label">01</span>
                        </div>
                        <div className="plan-card__body">
                            <h3>大掃除シーズンに大人気！</h3>
                            <p className="plan-card__subtitle">お掃除代行3点セット</p>
                            <p>【レンジフード、キッチン 、浴室、お掃除機能付きエアコン】から2点、【トイレ、洗面台、通常エアコン】から1点、計3点お好きなクリーニング箇所をお選びいただけるお得なプランです。</p>
                        </div>
                    </article>

                    <article className="plan-card">
                        <div className="plan-card__media">
                            <img src="/images/plan-2.jpg" alt="水回り5点セット" loading="lazy" />
                            <span className="plan-card__label">02</span>
                        </div>
                        <div className="plan-card__body">
                            <h3>しつこい水アカ、カビ汚れに</h3>
                            <p className="plan-card__subtitle">水回り5点セット</p>
                            <p>レンジフード（換気扇）、キッチン 、浴室、洗面台、トイレの水回り5箇所をまとめてお掃除するお得なお掃除代行プランです。</p>
                            <p>※作業時間目安は6時間程度の想定となります。</p>
                        </div>
                    </article>

                    <article className="plan-card">
                        <div className="plan-card__media">
                            <img src="/images/plan-3.jpg" alt="キッチン＆レンジフードセット" loading="lazy" />
                            <span className="plan-card__label">03</span>
                        </div>
                        <div className="plan-card__body">
                            <h3>こびりついた油汚れも徹底除去！</h3>
                            <p className="plan-card__subtitle">キッチン＆レンジフードセット</p>
                            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
