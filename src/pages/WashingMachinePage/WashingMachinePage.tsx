import { type FC } from "react";
import "../AirConditionerPage/AirConditionerPage.scss";

const featureItems = [
    {
        title: "洗濯機内部を洗浄可能な状態に分解",
        description: "専用工具で分解し、洗濯槽裏側を洗浄できる状態に。取り外し可能なタイプは槽を取り外して丸洗いします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E5%88%86%E8%A7%A3.jpg",
    },
    {
        title: "洗濯槽を徹底クリーニング",
        description: "洗濯槽や取り外した内部パーツをナチュラル材ベースでクリーニング。カビ汚れが強い場合は塩素系も選択できます。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A7%BD%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%84.jpg",
    },
    {
        title: "BEPPO！スタッフが丁寧にご対応",
        description: "お問い合わせから当日作業まで、安心安全なクリーニングを提供できるスタッフがしっかり対応します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2023/09/%E3%82%B9%E3%82%BF%E3%83%83%E3%83%95%E5%85%A8%E5%93%A1.jpg",
    },
];

const comparisonItems = [
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A7%BD%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC.jpg",
            alt: "洗濯槽クリーニング前",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A7%BD%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC.jpg",
            alt: "洗濯槽クリーニング後",
        },
        text: "洗濯槽内部のカビや水垢、柔軟剤カスまでしっかり除去します。",
    },
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%84%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC.jpg",
            alt: "洗濯機パーツ清掃前",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%84%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC.jpg",
            alt: "洗濯機パーツ清掃後",
        },
        text: "取り外したパーツも丁寧に洗浄し、再組み立て後に動作確認を行います。",
    },
];

const priceList = [
    {
        name: "タテ型洗濯機",
        price: "20,800円（税込）",
        note: "",
    },
    {
        name: "日立製 乾燥機付きタテ型",
        price: "30,800円（税込）",
        note: "",
    },
    {
        name: "ドラム型洗濯機",
        price: "30,800円（税込）",
        note: "一部機種は背面分解不要の場合に高圧洗浄対応。槽取り外し希望は＋5,000円（要スペース確認）。",
    },
];

const flowSteps = [
    {
        step: 1,
        title: "洗濯機の動作確認",
        text: "作業手順を説明し、洗濯機の動作確認を行います。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D-540x540.jpg",
    },
    {
        step: 2,
        title: "道具の搬入・作業場所の養生",
        text: "作業スペースを養生し、道具を搬入します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/08/%E9%81%93%E5%85%B7%E6%90%AC%E5%85%A5-540x540.jpg",
    },
    {
        step: 3,
        title: "洗濯機分解",
        text: "洗濯機を分解し、内部をクリーニング可能な状態にします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E5%88%86%E8%A7%A3-540x540.jpg",
    },
    {
        step: 4,
        title: "洗濯機の洗浄",
        text: "洗濯槽内部と取り外したパーツを洗浄します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%84%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC-540x540.jpg",
    },
    {
        step: 5,
        title: "組み立て動作確認",
        text: "洗濯機を組み立て、動作を再確認します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D-540x540.jpg",
    },
    {
        step: 6,
        title: "お支払い",
        text: "仕上がり確認後、現金またはクレジットカードでお支払いください。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E4%BC%9A%E8%A8%88-540x540.jpg",
    },
];

const faqItems = [
    {
        question: "クリーニング当日までに準備しておく事はありますか。",
        answer: "洗濯機周りと浴室の床に物がない状態にご準備ください。洗濯パン周辺と浴室を作業スペースとしてお借りします。",
    },
    {
        question: "作業時間はどのくらいですか。",
        answer: "タテ型で2〜3時間、日立乾燥機能付きタテ型で4時間前後、ドラム型で4時間前後が目安です。設置状況や汚れにより変動します。",
    },
    {
        question: "10年以上前の洗濯機は対応可能でしょうか。",
        answer: "破損や故障リスクが高いため、10年以上前の機種はお断りしております。",
    },
    {
        question: "クリーニング後の不具合は対応してもらえますか。",
        answer: "作業後1週間以内の不具合は、製造7年以内の機種に限り保証いたします。それ以上前の機種はメーカー対応不可の場合があります。",
    },
    {
        question: "作業中に外出しても良いですか。",
        answer: "外出可能です。お戻り時間を共有いただき、完了時に確認いただけるよう調整します。",
    },
    {
        question: "駐車スペースが無い場合はどうなりますか。",
        answer: "近隣コインパーキングを利用します。名古屋市中区・東区一部・名駅エリアは一律1,000円を頂戴し、その他エリアは当店負担です。",
    },
];

const recommendMenuItems = [
    {
        title: "浴室クリーニング",
        text: "カビ・水垢を徹底クリーニングし、清潔な水回りへ。",
        price: "16,800円（税込）〜",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wet_area_5-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "キッチンクリーニング",
        text: "レンジフード・コンロ・シンクをまとめてリフレッシュ。",
        price: "14,800円（税込）",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/10/%E5%A4%A9%E4%BA%95%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "水回り5点セット",
        text: "キッチン・レンジフード・浴室・洗面台・トイレをまとめてお得に。",
        price: "82,000円（税込）",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wet_area_5-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/wet_area_5/",
    },
];

const quickLinks = [
    { label: "クリーニングの特徴", href: "#feature" },
    { label: "ビフォーアフター", href: "#ba" },
    { label: "基本料金", href: "#anc-price" },
    { label: "クリーニング手順", href: "#flow" },
    { label: "よくあるご質問", href: "#faq" },
];

const WashingMachinePage: FC = () => {
    return (
        <main className="aircon-page washing-page page page--washing">
            <section className="aircon-hero">
                <div className="container aircon-hero__inner">
                    <div className="aircon-hero__content">
                        <span className="aircon-hero__eyebrow">WASHING MACHINE</span>
                        <h1>BEPPO！（ベッポ）の洗濯機クリーニング</h1>
                        <p className="aircon-hero__lead">洗濯槽の汚れを徹底クリーニング</p>
                        <p className="aircon-hero__description">洗濯槽内部の水垢やカビ、柔軟剤カスを分解洗浄。普段届かない裏側までプロ用工具でしっかりクリーニングし、におい・黒ずみの悩みを解消します。</p>
                        <div className="aircon-hero__cta">
                            <a className="aircon-button aircon-button--primary" href="#anc-price">
                                料金を見る
                            </a>
                            <a className="aircon-button aircon-button--ghost" href="#feature">
                                特徴を知る
                            </a>
                        </div>
                        <div className="aircon-hero__links" aria-label="ページ内リンク">
                            {quickLinks.map((item) => (
                                <a key={item.href} className="aircon-hero__chip" href={item.href}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="aircon-hero__media">
                        <img src="https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%83%A1%E3%82%A4%E3%83%B3-880x530.jpg" alt="洗濯機クリーニング" loading="lazy" />
                        <div className="aircon-hero__badge">
                            <span>エコ洗剤仕上げ</span>
                            <strong>タテ型・ドラム式対応</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-intro" id="introduction">
                <div className="container aircon-intro__inner">
                    <div className="aircon-intro__main">
                        <div className="aircon-intro__image">
                            <img src="https://www.beppo.co.jp/wp-content/uploads/2025/04/%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%83%A1%E3%82%A4%E3%83%B3-768x463.jpg" alt="洗濯機クリーニングの様子" loading="lazy" />
                        </div>
                        <div className="aircon-intro__text">
                            <h2>洗濯機を分解し、洗濯槽の裏側を徹底クリーニング</h2>
                            <p>洗濯槽内部の水垢やカビ、柔軟剤カスをしっかり洗浄。プロ用工具で分解し、普段届かない裏側までクリーニングします。</p>
                            <p>汚れが浮いてくる・においが気になる方におすすめ。定期的なクリーニングで衣類を清潔に洗えます。</p>
                            <p>対応メーカー：パナソニック・日立・シャープ・東芝（製造10年未満、保証対象は7年以内）</p>
                            <p className="aircon-intro__note">※一般家庭用のみ対応。業務用や10年以上前の機種は対象外となります。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-feature" id="feature">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FEATURE</p>
                        <h2>ドラム型・タテ型どちらも洗濯槽裏側までしっかり洗浄</h2>
                        <p className="aircon-section-heading__lead">分解、高圧洗浄、ナチュラル洗剤を組み合わせて徹底クリーニング。</p>
                    </div>
                    <div className="aircon-feature__grid">
                        {featureItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--feature">
                                <div className="aircon-card__image">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className="aircon-card__body">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aircon-comparison" id="ba">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">BEFORE / AFTER</p>
                        <h2>ビフォーアフター</h2>
                        <p className="aircon-section-heading__lead">洗濯槽もパーツも、しっかり洗浄してスッキリ。</p>
                    </div>
                    <div className="aircon-comparison__list">
                        {comparisonItems.map((item, index) => (
                            <article key={item.text} className="aircon-card aircon-card--comparison">
                                <div className="aircon-comparison__images">
                                    <div className="aircon-comparison__image-block">
                                        <span className="aircon-comparison__tag aircon-comparison__tag--before">BEFORE</span>
                                        <img src={item.before.src} alt={item.before.alt} loading="lazy" />
                                    </div>
                                    <div className="aircon-comparison__image-block">
                                        <span className="aircon-comparison__tag aircon-comparison__tag--after">AFTER</span>
                                        <img src={item.after.src} alt={item.after.alt} loading="lazy" />
                                    </div>
                                </div>
                                <p className="aircon-comparison__text">
                                    <span className="aircon-pill">Case {index + 1}</span>
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aircon-price" id="anc-price">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">PRICE</p>
                        <h2>基本料金</h2>
                        <p className="aircon-section-heading__lead">機種・作業方法によって金額が異なります。</p>
                    </div>
                    <div className="aircon-price__grid">
                        {priceList.map((item) => (
                            <article key={item.name} className="aircon-card aircon-card--price">
                                <div className="aircon-card__body">
                                    <h3>{item.name}</h3>
                                    <p className="aircon-price__main">{item.price}</p>
                                    {item.note ? <p className="aircon-price__note">{item.note}</p> : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aircon-flow" id="flow">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FLOW</p>
                        <h2>クリーニング手順</h2>
                        <p className="aircon-section-heading__lead">6ステップで安全・丁寧に仕上げます。</p>
                    </div>
                    <ol className="aircon-flow__list">
                        {flowSteps.map((item) => (
                            <li key={item.step} className="aircon-flow__item">
                                <div className="aircon-flow__number">
                                    <span>STEP.{item.step}</span>
                                </div>
                                <div className="aircon-flow__image">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className="aircon-flow__text">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="aircon-faq" id="faq">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FAQ</p>
                        <h2>洗濯機クリーニングに関するよくあるご質問</h2>
                    </div>
                    <div className="aircon-faq__list">
                        {faqItems.map((item) => (
                            <details key={item.question} className="aircon-faq__item">
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aircon-recommend">
                <div className="container aircon-recommend__inner">
                    <div className="aircon-section-heading aircon-section-heading--left">
                        <p className="aircon-section-heading__eyebrow">RECOMMEND</p>
                        <h2>洗濯機クリーニングはこんな方におすすめ</h2>
                    </div>
                    <div className="aircon-recommend__content">
                        <p>身につける衣類を洗う洗濯機だからこそ、清潔に保ちたい方へ。</p>
                        <p>BEPPO！の「洗濯機クリーニング」は下記のようなお悩みにおすすめです。</p>
                        <ul>
                            <li>2年以上洗濯槽をクリーニングしていない</li>
                            <li>洗濯時に黒い汚れが浮いてくる</li>
                            <li>洗濯機内部のにおいが気になる</li>
                            <li>乾燥機能の効きが落ちてきた気がする</li>
                            <li>出産前などのライフイベントに向けて清潔にしたい</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="aircon-related">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">RELATED MENU</p>
                        <h2>このメニューを見ている人におすすめのメニュー</h2>
                    </div>
                    <div className="aircon-related__grid">
                        {recommendMenuItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--related">
                                <div className="aircon-card__image">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className="aircon-card__body">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <p className="aircon-price__main aircon-price__main--small">{item.price}</p>
                                    <a className="aircon-button aircon-button--ghost" href={item.link} target="_blank" rel="noreferrer">
                                        詳しく見る
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WashingMachinePage;
