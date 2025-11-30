import { type FC } from "react";
import "../AirConditionerPage/AirConditionerPage.scss";

const featureItems = [
    {
        title: "普段手の届かない部分を徹底的にクリーニング",
        description: "レンジフード内部や浴室エプロン、玄関・ベランダ・窓サッシなど、手が回りにくい箇所までまるごとお掃除します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%99%E5%88%86%E8%A7%A3.jpg",
    },
    {
        title: "手に触れる箇所は安全なナチュラル材を使用",
        description: "重曹・セスキ・クエン酸・アルカリ電解水など身体にやさしいナチュラル材をメインに、お家全体をクリーニングします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%AA%E3%83%BC%E3%82%AB%E3%82%99%E3%83%8B%E3%83%83%E3%82%AF%E6%9D%90.jpg",
    },
    {
        title: "エアコンクリーニングや各種オプションにも対応",
        description: "住居全体クリーニングに加え、エアコン洗浄やガラスコーティングなどのオプションも組み合わせ可能。ご予約時にご案内します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E9%AB%98%E5%9C%A7_.jpg",
    },
    {
        title: "BEPPO！スタッフが丁寧にご対応",
        description: "お問い合わせから当日まで、安心・安全なクリーニングを提供できるスタッフがしっかり対応。気になる点はお気軽にご相談ください。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2023/09/%E3%82%B9%E3%82%BF%E3%83%83%E3%83%95%E5%85%A8%E5%93%A1.jpg",
    },
];

const comparisonItems = [
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/flooring_b.jpg",
            alt: "住居全体クリーニングのビフォー（床）",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/flooring_a.jpg",
            alt: "住居全体クリーニングのアフター（床）",
        },
        text: "水回り、ベランダ、窓、建具、床まで住居全体をクリーニング。",
    },
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/10/200821_b_03.jpg",
            alt: "キッチン周り清掃前",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/10/200821_a_03.jpg",
            alt: "キッチン周り清掃後",
        },
        text: "レンジ内部やコンロ、シンクまでしっかりクリーニング。",
    },
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2021/02/201105_b_01.jpg",
            alt: "住居全体クリーニング前の浴室・水回り",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2021/02/201105_a_01.jpg",
            alt: "住居全体クリーニング後の浴室・水回り",
        },
        text: "浴室や水回りもまとめてリセットし、清潔な空間に。",
    },
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E7%AA%93%E3%83%BB%E3%82%B5%E3%83%83%E3%82%B7%E4%BD%9C%E6%A5%AD%E5%89%8D.jpg",
            alt: "窓・サッシ清掃前",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E7%AA%93%E3%83%BB%E3%82%B5%E3%83%83%E3%82%B7%E4%BD%9C%E6%A5%AD%E5%BE%8C.jpg",
            alt: "窓・サッシ清掃後",
        },
        text: "窓・サッシ・ベランダまで徹底洗浄。明るいお部屋に戻します。",
    },
];

const optionItems = [
    { title: "ガラスコーティング", price: "要見積り", description: "水回りの汚れ再付着を防ぐコーティングを追加可能です。" },
    { title: "エアコンクリーニング追加", price: "要見積り", description: "住居全体クリーニングと合わせてエアコンもリセット。" },
    { title: "窓枚数追加", price: "要見積り", description: "窓の枚数によってはオプションとなります。事前にご相談ください。" },
];

const voices = [
    {
        area: "名古屋市",
        rating: 5,
        text: "築10年を過ぎ、家全体の汚れが気になり依頼。床も水回りもすっきりして快適に過ごせています。",
    },
    {
        area: "名古屋市",
        rating: 5,
        text: "1R在室でのクリーニングでも丁寧に作業いただきました。窓やベランダまできれいになり満足です。",
    },
    {
        area: "尾張旭市",
        rating: 5,
        text: "出産前に家全体をお願いしました。ナチュラル洗剤中心で安心でき、部屋が明るくなりました。",
    },
];

const flowSteps = [
    {
        step: 1,
        title: "事前確認",
        text: "清掃範囲とご要望を確認し、作業時間をご案内します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D-540x540.jpg",
    },
    {
        step: 2,
        title: "養生・準備",
        text: "道具を搬入し、床や周辺を養生します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/08/%E9%81%93%E5%85%B7%E6%90%AC%E5%85%A5-540x540.jpg",
    },
    {
        step: 3,
        title: "各所クリーニング",
        text: "水回り・窓・ベランダ・建具・床など対象箇所を順次クリーニングします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-880x530.jpg",
    },
    {
        step: 4,
        title: "オプション作業",
        text: "ご依頼に応じてエアコン洗浄やガラスコーティングなどを実施します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E9%AB%98%E5%9C%A7_.jpg",
    },
    {
        step: 5,
        title: "仕上げ・確認",
        text: "清掃箇所を仕上げ拭きし、仕上がりをご一緒に確認します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2025/04/%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D-540x540.jpg",
    },
    {
        step: 6,
        title: "お支払い",
        text: "現金またはクレジットカードでお支払いください。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E4%BC%9A%E8%A8%88-540x540.jpg",
    },
];

const recommendMenuItems = [
    {
        title: "水回り5点セット",
        text: "キッチン・レンジフード・浴室・洗面台・トイレをまとめてお得に。",
        price: "82,000円（税込）",
        note: "まとめてお得!!",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wet_area_5-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/wet_area_5/",
    },
    {
        title: "お引越し・入居前ハウスクリーニング",
        text: "入居前の住居全体を徹底クリーニング。フローリングWAXもご相談ください。",
        price: "103,800円（税込）〜",
        note: "",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/empty_room-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/empty_room/",
    },
    {
        title: "キッチンクリーニング",
        text: "レンジフード・コンロ・シンクの油汚れと水垢をリセット。",
        price: "14,800円（税込）",
        note: "",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/10/%E5%A4%A9%E4%BA%95%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/ceiling-air-con/",
    },
];

const quickLinks = [
    { label: "クリーニングの特徴", href: "#feature" },
    { label: "ビフォーアフター", href: "#ba" },
    { label: "基本料金", href: "#anc-price" },
    { label: "オプション料金", href: "#anc-option" },
    { label: "お客様の声", href: "#voice" },
    { label: "クリーニング手順", href: "#flow" },
    { label: "クリーニング事例", href: "#work" },
    { label: "よくあるご質問", href: "#faq" },
];

const SetPlansPage: FC = () => {
    return (
        <main className="aircon-page setplans-page page page--set-plans">
            <section className="aircon-hero">
                <div className="container aircon-hero__inner">
                    <div className="aircon-hero__content">
                        <span className="aircon-hero__eyebrow">WHOLE CLEANING</span>
                        <h1>BEPPO！（ベッポ）の住居全体クリーニング</h1>
                        <p className="aircon-hero__lead">ご在宅の住居全体セットプラン</p>
                        <p className="aircon-hero__description">家全体の汚れを一掃したい方におすすめのセットプラン。水回りから窓・ベランダ・床まで、ナチュラル材中心で安全にクリーニングします。</p>
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
                        <img src="https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-880x530.jpg" alt="住居全体クリーニング" loading="lazy" />
                        <div className="aircon-hero__badge">
                            <span>ナチュラル洗剤</span>
                            <strong>家まるごと対応</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-intro" id="introduction">
                <div className="container aircon-intro__inner">
                    <div className="aircon-intro__main">
                        <div className="aircon-intro__image">
                            <img src="https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-768x463.jpg" alt="住居全体クリーニングの様子" loading="lazy" />
                        </div>
                        <div className="aircon-intro__text">
                            <h2>住居全体の汚れを一掃！清潔なお住まいに</h2>
                            <p>「家全体をまとめてきれいにしたい」という方のためのセットプラン。蓄積した汚れを一気にリセットし、お部屋を蘇らせます。</p>
                            <p>水回り（レンジフード・換気扇・キッチン・浴室・洗面台・トイレ）、ベランダ、窓、玄関、建具、床など幅広く対応します。</p>
                            <p>クリーニング時間は範囲に合わせてご提案。オーガニック材と化学洗剤を使い分け、安全と仕上がりを両立します。窓枚数などでオプションとなる場合があります。</p>
                            <p className="aircon-intro__note">※家具など物が置いてある箇所は清掃不可となる場合があります。詳しくはお見積りにてご案内します。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-feature" id="feature">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FEATURE</p>
                        <h2>水回りから窓・ベランダ・床まで、家まるごと対応</h2>
                        <p className="aircon-section-heading__lead">ナチュラル材を中心に、安全と徹底クリーニングを両立します。</p>
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
                        <p className="aircon-section-heading__lead">水回りも床も窓も、まとめてリフレッシュ。</p>
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
                        <p className="aircon-section-heading__lead">清掃範囲と内容に応じてお見積りいたします。</p>
                    </div>
                    <div className="aircon-price__grid">
                        <article className="aircon-card aircon-card--price">
                            <div className="aircon-card__body">
                                <h3>住居全体クリーニング</h3>
                                <p className="aircon-price__main">要見積り</p>
                                <p className="aircon-price__note">水回り・窓・ベランダ・建具・床など範囲に合わせてご提案します。</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="aircon-options" id="anc-option">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">OPTION</p>
                        <h2>オプション</h2>
                        <p className="aircon-section-heading__lead">窓枚数追加やコーティングなど、ご要望に応じて組み合わせ可能です。</p>
                    </div>
                    <div className="aircon-options__grid">
                        {optionItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--option">
                                <div className="aircon-card__body">
                                    <div className="aircon-card__title">
                                        <span className="aircon-pill">追加</span>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <p>{item.description}</p>
                                    <p className="aircon-price__main aircon-price__main--small">{item.price}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aircon-voice" id="voice">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">VOICE</p>
                        <h2>ご利用いただいたお客様の声</h2>
                        <p className="aircon-section-heading__lead">住居全体クリーニングをご利用いただいたお客様の口コミです。</p>
                    </div>
                    <div className="aircon-voice__list">
                        {voices.map((item) => (
                            <article key={item.text} className="aircon-card aircon-card--voice">
                                <div className="aircon-voice__meta">
                                    <div>
                                        <p className="aircon-voice__label">エリア</p>
                                        <p className="aircon-voice__value">{item.area}</p>
                                    </div>
                                    <div className="aircon-voice__stars" aria-label={`5段階中${item.rating}の評価`}>
                                        {"★".repeat(item.rating)}
                                        <span className="aircon-voice__score">{item.rating}</span>
                                    </div>
                                </div>
                                <p className="aircon-voice__text">{item.text}</p>
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

            <section className="aircon-recommend">
                <div className="container aircon-recommend__inner">
                    <div className="aircon-section-heading aircon-section-heading--left">
                        <p className="aircon-section-heading__eyebrow">RECOMMEND</p>
                        <h2>住居全体クリーニングはこんな方におすすめ</h2>
                    </div>
                    <div className="aircon-recommend__content">
                        <p>家全体を一気にきれいにしたい方や、出産・来客・リフレッシュのタイミングに。</p>
                        <ul>
                            <li>蓄積した汚れをまとめてリセットしたい</li>
                            <li>水回りも窓も床も一度にきれいにしたい</li>
                            <li>出産や新生活前に清潔にしておきたい</li>
                            <li>ナチュラル洗剤を中心に安全に掃除してほしい</li>
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
                                    {item.note ? <p className="aircon-price__note">{item.note}</p> : null}
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

export default SetPlansPage;
