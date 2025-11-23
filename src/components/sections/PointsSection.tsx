import "./PointsSection.scss";

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
                    <article className="point-card">
                        <div className="point-card__media">
                            <img src="/images/point-1.jpg" alt="水回り汚れを根本から除去" loading="lazy" />
                        </div>
                        <div className="point-card__body">
                            <span className="point-card__badge">POINT 1</span>
                            <h3>水回り汚れを根本から除去</h3>
                            <p>美しさを取り戻したキッチンや水回りが直ぐに汚れてしまわぬよう、「根本の汚れ除去」を基本としたハウスクリーニングを提供しております。</p>
                        </div>
                    </article>

                    <article className="point-card">
                        <div className="point-card__media">
                            <img src="/images/point-2.jpg" alt="お掃除代行は仕上がりだけじゃない！人柄の良いスタッフが安心の気配り対応" loading="lazy" />
                        </div>
                        <div className="point-card__body">
                            <span className="point-card__badge">POINT 2</span>
                            <h3>
                                <span> お掃除代行は仕上がりだけじゃない！</span>
                                <span> 人柄の良いスタッフが安心の気配り対応 </span>
                            </h3>
                            <p> お掃除代行はお客様の大切なご自宅に伺う為、55リフォーム名古屋では腕の良さはもちろんのこと、お客様から安心される人柄の良いスタッフだけをご用意しております。 </p>
                        </div>
                    </article>

                    <article className="point-card">
                        <div className="point-card__media">
                            <img src="/images/point-3.jpg" alt="水回り、エアコン各所のプロが対応！" loading="lazy" />
                        </div>
                        <div className="point-card__body">
                            <span className="point-card__badge">POINT 3</span>
                            <h3>
                                <span>水回り、エアコン各所のプロが対応！</span>
                            </h3>
                            <p>一言にお掃除代行といっても、水回りやキッチン、エアコン清掃など多岐にわたりますので各所専門のプロが対応させていただきます。</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default PointsSection;
