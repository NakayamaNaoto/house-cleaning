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
                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h3>ハウスクリーニングの基準は新品同様の美しさ</h3>
                            <p>55リフォーム名古屋店は普段、新入居者様をお迎えする前のアパート清掃も担当しており、水回りやキッチンなど、新品に近づけるハウスクリーニングの質が求められる中でお仕事をするプロ集団の為、出来栄えは当然安心。</p>
                        </div>
                        <div className="feature-card__media">
                            <img src="/images/feature-1.jpg" alt="ハウスクリーニングの基準は新品同様の美しさ" loading="lazy" />
                        </div>
                    </article>
                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h3>安心の2段階無料お見積もり</h3>
                            <p>お問い合わせの際にLINEのやり取りで大まかなお見積りをお出ししたのち、現地訪問にて最終のお見積りを作成しますので、スタッフ訪問時も安心してお見積りの確認をいただけます。</p>
                        </div>
                        <div className="feature-card__media">
                            <img src="/images/feature-2.jpg" alt="安心の2段階無料お見積もり" loading="lazy" />
                        </div>
                    </article>
                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h3>お掃除代行のご依頼確定するまで全て無料対応</h3>
                            <p>55リフォーム名古屋店の事前対応の手厚さゆえに「本当に依頼するまで無料？」とご質問いただくことがありますが、本当に無料です！", "昨今、様々なタイプのエアコンやキッチンシステム等ありますので、事前の現地調査を非常に重要視しております。訪問のご対応、何卒よろしくお願い申し上げます。</p>
                        </div>
                        <div className="feature-card__media">
                            <img src="/images/feature-3.jpg" alt="お掃除代行のご依頼確定するまで全て無料対応" loading="lazy" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;
