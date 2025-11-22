import { pointCards } from "../../data/content";

const PointsSection = () => {
    return (
        <section className="points">
            <div className="container">
                <header className="section-heading">
                    <p className="kicker">CHECK!</p>
                    <h2>
                        「頼んで良かった！」の声が続出する理由。
                        <span>ハウスクリーニングに対する不安に向き合ったサービス</span>
                    </h2>
                    <p className="section-heading__lead">エアコンやキッチン、水回り。お客様のプライベートゾーンにお邪魔するからこその気遣いと技術を。</p>
                </header>

                <div className="points__grid">
                    {pointCards.map((point) => (
                        <article key={point.label} className="point-card">
                            <div className="point-card__media">
                                <img src={point.image} alt={`${point.title.join("")}`} loading="lazy" />
                            </div>
                            <div className="point-card__body">
                                <span className="point-card__badge">POINT {point.label}</span>
                                <h3>
                                    {point.title.map((line) => (
                                        <span key={line}>{line}</span>
                                    ))}
                                </h3>
                                {point.body.map((paragraph) => (
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

export default PointsSection;
