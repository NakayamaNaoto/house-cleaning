import { type FC } from "react";
import "../AirConditionerPage/AirConditionerPage.scss";

const featureItems = [
    {
        title: "窓・サッシやベランダなど部分クリーニングも柔軟対応",
        description: "ガラス・サッシ・網戸やベランダなど、部分的なお掃除もプロの道具と洗剤で細部まで仕上げます。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E7%AA%93%E3%83%BB%E3%82%B5%E3%83%83%E3%82%B7%E4%BD%9C%E6%A5%AD%E5%BE%8C.jpg",
    },
    {
        title: "トイレ・洗面台など水回りのピンポイント洗浄",
        description: "黒ずみや尿石、水垢を専用洗剤で分解洗浄。便座まわりや蛇口のくすみもすっきりリセットします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/toilet-574x444.jpg",
    },
    {
        title: "床洗浄・WAXやフローリングケアもお任せ",
        description: "フローリング洗浄とWAXでツヤを取り戻し、キズ防止と汚れの再付着を抑制します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/flooring_a.jpg",
    },
    {
        title: "天井エアコン・業務用エアコンも対応",
        description: "一般・業務用の天井エアコンも高圧洗浄で徹底クリーニング。店舗やオフィスのご相談も承ります。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/10/%E5%A4%A9%E4%BA%95%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3-574x444.jpg",
    },
];

const planItems = [
    {
        title: "天井エアコンクリーニング",
        price: "24,000円（税込）〜",
        note: "2台以上で 1台21,000円〜",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/10/%E5%A4%A9%E4%BA%95%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/ceiling-air-con/",
    },
    {
        title: "窓・サッシクリーニング",
        price: "12,800円（税込）〜",
        note: "枚数・サイズによりお見積り",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E7%AA%93%E3%83%BB%E3%82%B5%E3%83%83%E3%82%B7%E4%BD%9C%E6%A5%AD%E5%BE%8C.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "トイレクリーニング",
        price: "9,800円（税込）",
        note: "",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/toilet-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "洗面台クリーニング",
        price: "9,800円（税込）",
        note: "",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wash-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "フローリング洗浄・WAX",
        price: "16,800円（税込）〜",
        note: "広さに応じてお見積り",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/flooring_a.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "ベランダ・外回りクリーニング",
        price: "要見積り",
        note: "汚れ・広さにより変動",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-880x530.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
];

const optionItems = [
    { title: "ガラスコーティング", price: "要見積り", description: "水回りの汚れ再付着を防ぐコーティングを追加可能です。" },
    { title: "エアコンクリーニング追加", price: "要見積り", description: "その他プランと合わせてエアコンもリセット。" },
    { title: "窓枚数追加", price: "要見積り", description: "窓の枚数やサイズに応じてオプション対応します。" },
];

const comparisonItems = [
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/flooring_b.jpg",
            alt: "床クリーニング前",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/flooring_a.jpg",
            alt: "床クリーニング後",
        },
        text: "床洗浄とWAXでツヤと清潔感を復活させます。",
    },
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/10/200821_b_03.jpg",
            alt: "キッチン周りクリーニング前",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/10/200821_a_03.jpg",
            alt: "キッチン周りクリーニング後",
        },
        text: "キッチンの油汚れも徹底洗浄し、ベタつきを解消します。",
    },
];

const faqItems = [
    {
        question: "価格はどのように決まりますか。",
        answer: "清掃箇所の数量や広さ、汚れ具合を確認のうえお見積りします。まずはお気軽にご相談ください。",
    },
    {
        question: "同時に複数箇所を頼めますか。",
        answer: "可能です。複数箇所をまとめてご依頼いただくと、お得なセットをご提案できる場合があります。",
    },
    {
        question: "ナチュラル洗剤での対応は可能ですか。",
        answer: "手に触れる箇所はナチュラル材を基本に、汚れと素材に合わせて洗剤を使い分けます。ご要望があれば事前にお知らせください。",
    },
    {
        question: "作業時間はどのくらいかかりますか。",
        answer: "範囲・汚れにより変動しますが、事前のヒアリングで目安時間をご案内します。",
    },
    {
        question: "作業中に外出できますか。",
        answer: "外出は可能です。お戻り時間を共有いただければ、完了時に仕上がりをご確認いただけます。",
    },
];

const flowSteps = [
    {
        step: 1,
        title: "事前確認",
        text: "清掃箇所やご要望を確認し、作業内容と目安時間をご案内します。",
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
        text: "水回り・窓・床など対象箇所を順次クリーニングします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-880x530.jpg",
    },
    {
        step: 4,
        title: "オプション作業",
        text: "ご依頼に応じてエアコン洗浄やコーティングなどを実施します。",
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

const quickLinks = [
    { label: "クリーニングの特徴", href: "#feature" },
    { label: "ビフォーアフター", href: "#ba" },
    { label: "プラン例", href: "#plans" },
    { label: "オプション・相談", href: "#anc-option" },
    { label: "お客様の声", href: "#voice" },
    { label: "クリーニング手順", href: "#flow" },
    { label: "よくあるご質問", href: "#faq" },
];

const OtherPlansPage: FC = () => {
    return (
        <main className="aircon-page otherplans-page page page--other-plans">
            <section className="aircon-hero">
                <div className="container aircon-hero__inner">
                    <div className="aircon-hero__content">
                        <span className="aircon-hero__eyebrow">OTHER MENU</span>
                        <h1>BEPPO！（ベッポ）のその他プラン</h1>
                        <p className="aircon-hero__lead">窓・サッシ、トイレ、洗面台、床、天井エアコンなど</p>
                        <p className="aircon-hero__description">気になる場所だけピンポイントで、複数箇所をまとめてでもOK。ナチュラル材中心に安全・丁寧にクリーニングします。</p>
                        <div className="aircon-hero__cta">
                            <a className="aircon-button aircon-button--primary" href="#plans">
                                プランを見る
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
                        <img src="https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-880x530.jpg" alt="BEPPO！のその他プラン" loading="lazy" />
                        <div className="aircon-hero__badge">
                            <span>ナチュラル洗剤</span>
                            <strong>部分〜まとめてOK</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-intro" id="introduction">
                <div className="container aircon-intro__inner">
                    <div className="aircon-intro__main">
                        <div className="aircon-intro__image">
                            <img src="https://www.beppo.co.jp/wp-content/uploads/2020/03/whole-768x463.jpg" alt="ハウスクリーニングの様子" loading="lazy" />
                        </div>
                        <div className="aircon-intro__text">
                            <h2>気になる場所だけ、まとめて、柔軟にカスタム</h2>
                            <p>窓・サッシ、ベランダ、トイレ、洗面台、床、天井エアコンなど、単品でもセットでもご依頼可能。ナチュラル材を中心に、汚れや素材に合わせて洗剤を使い分けます。</p>
                            <p>複数箇所をまとめてご依頼いただくとお得なセットをご提案できます。まずはお気軽にお問い合わせください。</p>
                            <p className="aircon-intro__note">※窓の枚数や広さ、汚れ具合によっては追加お見積りとなる場合があります。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-feature" id="feature">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FEATURE</p>
                        <h2>水回りから床、窓、天井エアコンまで幅広く対応</h2>
                        <p className="aircon-section-heading__lead">ナチュラル材を中心に、安全かつ徹底したクリーニングをご提供します。</p>
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
                        <p className="aircon-section-heading__lead">床もキッチンも、汚れをリセットしてすっきり。</p>
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

            <section className="aircon-price" id="plans">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">MENU</p>
                        <h2>その他プラン例</h2>
                        <p className="aircon-section-heading__lead">単品から複数セットまで、ご要望に応じてカスタム可能です。</p>
                    </div>
                    <div className="aircon-related__grid">
                        {planItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--related">
                                <div className="aircon-card__image">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className="aircon-card__body">
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
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

            <section className="aircon-options" id="anc-option">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">OPTION</p>
                        <h2>オプション・ご相談</h2>
                        <p className="aircon-section-heading__lead">窓枚数追加、コーティング、エアコン追加など柔軟に対応します。</p>
                    </div>
                    <div className="aircon-options__grid">
                        {optionItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--option">
                                <div className="aircon-card__body">
                                    <div className="aircon-card__title">
                                        <span className="aircon-pill">相談</span>
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
                        <h2>お客様の声</h2>
                        <p className="aircon-section-heading__lead">セット・単品クリーニングをご利用いただいた方の口コミです。</p>
                    </div>
                    <div className="aircon-voice__list">
                        {faqItems.slice(0, 0).map(() => null)}
                        {/* 公式サイトの声を短く要約 */}
                        <article className="aircon-card aircon-card--voice">
                            <div className="aircon-voice__meta">
                                <div>
                                    <p className="aircon-voice__label">エリア</p>
                                    <p className="aircon-voice__value">名古屋市</p>
                                </div>
                                <div className="aircon-voice__stars" aria-label="5段階中5の評価">
                                    ★★★★★<span className="aircon-voice__score">5</span>
                                </div>
                            </div>
                            <p className="aircon-voice__text">築年数が経ち全体の汚れが気になり依頼。床も水回りもすっきりして快適になりました。</p>
                        </article>
                        <article className="aircon-card aircon-card--voice">
                            <div className="aircon-voice__meta">
                                <div>
                                    <p className="aircon-voice__label">エリア</p>
                                    <p className="aircon-voice__value">名古屋市</p>
                                </div>
                                <div className="aircon-voice__stars" aria-label="5段階中5の評価">
                                    ★★★★★<span className="aircon-voice__score">5</span>
                                </div>
                            </div>
                            <p className="aircon-voice__text">1R在室でも丁寧に作業。窓やベランダまできれいになり満足です。</p>
                        </article>
                        <article className="aircon-card aircon-card--voice">
                            <div className="aircon-voice__meta">
                                <div>
                                    <p className="aircon-voice__label">エリア</p>
                                    <p className="aircon-voice__value">尾張旭市</p>
                                </div>
                                <div className="aircon-voice__stars" aria-label="5段階中5の評価">
                                    ★★★★★<span className="aircon-voice__score">5</span>
                                </div>
                            </div>
                            <p className="aircon-voice__text">出産前に家全体を依頼。ナチュラル洗剤中心で安心でき、部屋が明るくなりました。</p>
                        </article>
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
                        <h2>よくあるご質問</h2>
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
                        <h2>その他プランはこんな方におすすめ</h2>
                    </div>
                    <div className="aircon-recommend__content">
                        <p>部分的な汚れをプロに任せたい方、引越しや来客前にポイントで整えたい方に。</p>
                        <ul>
                            <li>窓・サッシやベランダだけをきれいにしたい</li>
                            <li>トイレや洗面台の水垢・黒ずみをリセットしたい</li>
                            <li>床のツヤを戻し、キズや汚れ付着を抑えたい</li>
                            <li>天井エアコンなど業務用も相談したい</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OtherPlansPage;
