import { type FC } from "react";
import "../AirConditionerPage/AirConditionerPage.scss";

const featureItems = [
    {
        title: "換気扇・レンジフードの頑固な油汚れを分解洗浄",
        description: "ファンやフード内部まで分解し、固着した油をアルカリ洗浄と高圧洗浄で徹底除去。回転効率を上げてにおいもリセットします。",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "コンロまわりの焦げ付き・油はねも丁寧に除去",
        description: "天板や五徳の焦げ付き、壁面タイルの油はねまで専用洗剤でリセット。キッチン全体を明るい印象に仕上げます。",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "シンク・蛇口の水垢を鏡面仕上げに",
        description: "ステンレスシンクのくすみや水栓の白い水垢を研磨とコーティングでツヤ出し。水弾きが良くなり汚れの再付着も抑えます。",
        image: "https://images.unsplash.com/photo-1506368083636-6defb67639f0?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "食洗機や壁面もまとめてクリーニング",
        description: "庫内のヌメリやパッキン周りのカビ、キッチンパネルのベタつきも同時にケア。安全なエコ洗剤で仕上げます。",
        image: "https://images.unsplash.com/photo-1600585154340-0ef3c08f05c7?auto=format&fit=crop&w=1200&q=80",
    },
];

const comparisonItems = [
    {
        before: {
            src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
            alt: "キッチンシンク清掃前",
        },
        after: {
            src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
            alt: "キッチンシンク清掃後",
        },
        text: "シンクや水栓の水垢・くすみを除去し、鏡面仕上げでツヤ感を復活。排水口まわりも除菌洗浄します。",
    },
    {
        before: {
            src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
            alt: "コンロ周り清掃前",
        },
        after: {
            src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
            alt: "コンロ周り清掃後",
        },
        text: "天板の焦げ付きや油はねをリセット。レンジフード内部の油詰まりも分解洗浄でしっかり落とします。",
    },
];

const priceList = [
    {
        name: "キッチン一式",
        price: "14,800円（税込）",
        special: "13,800円（税込）",
        note: "2台目以降・他メニュー同時でさらにお得",
    },
    {
        name: "レンジフード（単品）",
        price: "12,800円（税込）",
        special: "11,800円（税込）",
        note: "2台以上のご予約で 1台11,300円！",
    },
];

const optionItems = [
    {
        title: "魚焼きグリル洗浄",
        description: "網やトレイの焦げ付き、庫内の油汚れを専用洗剤で分解し高温洗浄。においもスッキリします。",
        price: "3,000円（税込）",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "シンク撥水コーティング",
        description: "シンク表面を撥水コートし、水垢や着色汚れの再付着を抑制。日々のお手入れが楽になります。",
        price: "4,000円（税込）",
        image: "https://images.unsplash.com/photo-1506368083636-6defb67639f0?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "排水口分解洗浄＆除菌",
        description: "排水口やトラップを分解し、ヌメリ・カビを除菌洗浄。嫌なにおいを抑えて清潔に保ちます。",
        price: "3,000円（税込）",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    },
];

const voices = [
    {
        area: "名古屋市",
        service: "キッチン",
        rating: 5,
        text: "レンジフードのベタつきとにおいが気になり依頼しました。分解して洗ってもらい、吸い込みが明らかに良くなりました。作業前後の説明も丁寧で安心でした！",
    },
    {
        area: "豊田市",
        service: "キッチン",
        rating: 5,
        text: "シンクの水垢や排水口のニオイが悩みでしたが、ピカピカに仕上がりました。撥水コートも追加したので普段の掃除がラクです。",
    },
    {
        area: "日進市",
        service: "キッチン",
        rating: 5,
        text: "小さな子どもがいるのでエコ洗剤対応を探していました。食洗機の内部まで洗ってもらえ、安心して使えるようになりました。",
    },
];

const flowSteps = [
    {
        step: 1,
        title: "キッチンの状態確認・ヒアリング",
        text: "気になる箇所や素材を確認し、最適な洗剤と作業方法を選定します。",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: 2,
        title: "養生・動作確認",
        text: "コンロや床・壁を養生し、換気扇や食洗機の動作を確認します。",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: 3,
        title: "レンジフード分解",
        text: "フィルター・ファンを取り外し、油汚れを浸け置きとブラッシングで分解します。",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: 4,
        title: "コンロ・五徳の洗浄",
        text: "焦げ付きや油はねを専用洗剤で浮かせ、傷を付けないように洗浄します。",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: 5,
        title: "シンク・水栓の研磨仕上げ",
        text: "水垢を除去し、シンクを磨き上げて撥水コートで仕上げます。",
        image: "https://images.unsplash.com/photo-1506368083636-6defb67639f0?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: 6,
        title: "排水口・周辺パーツの除菌洗浄",
        text: "排水口・ゴミ受け・パッキンを分解洗浄し、除菌してにおいを抑えます。",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: 7,
        title: "最終確認・片付け",
        text: "仕上がりをお客様と確認し、養生を外して清掃箇所を拭き上げます。",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    },
];

const workItems = [
    {
        area: ["名古屋市", "愛知県"],
        category: "キッチンクリーニング",
        title: "【キッチン】レンジフード分解洗浄＋コンロ焦げ落とし",
        before: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        area: ["豊田市", "愛知県"],
        category: "キッチンクリーニング",
        title: "【キッチン】シンク水垢除去＋撥水仕上げ",
        before: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        area: ["日進市", "愛知県"],
        category: "キッチンクリーニング",
        title: "【キッチン】食洗機庫内クリーニング",
        before: "https://images.unsplash.com/photo-1600585154340-0ef3c08f05c7?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1506368083636-6defb67639f0?auto=format&fit=crop&w=800&q=80",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        area: ["一宮市", "愛知県"],
        category: "キッチンクリーニング",
        title: "【キッチン】コンロ・グリルの焦げ除去",
        before: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        link: "https://www.beppo.co.jp/menu/",
    },
];

const faqItems = [
    {
        question: "作業時間はどのくらいかかりますか？",
        answer: "キッチン一式で約2〜3時間、レンジフード単品で約1.5〜2時間が目安です。汚れ具合やオプション有無で前後します。",
    },
    {
        question: "強い洗剤のにおいが心配です。",
        answer: "エコ洗剤を基本とし、素材や汚れに合わせて低臭タイプを使用します。小さなお子様やペットがいる場合もご相談ください。",
    },
    {
        question: "IHやステンレスが傷つきませんか？",
        answer: "素材に合わせたパッドと研磨剤を選び、傷がつきにくい方法で施工します。事前に目立たない部分でテストします。",
    },
    {
        question: "換気扇の分解が難しい機種でも対応できますか？",
        answer: "型番を事前にお知らせいただければ対応可否を確認します。特殊形状の場合は代替作業をご提案します。",
    },
    {
        question: "作業中に調理はできますか？",
        answer: "安全のため、作業中の調理はお控えください。水回り・コンロ周辺を使用する場合は事前にご相談ください。",
    },
];

const recommendMenuItems = [
    {
        title: "換気扇（レンジフード）クリーニング",
        text: "ファン・フィルターを分解洗浄し、油詰まりとにおいをリセットします。",
        price: "12,800円（税込）",
        special: "11,800円（税込）",
        note: "2台以上のご予約で 1台11,300円！",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "浴室クリーニング",
        text: "カビや水垢を徹底洗浄し、エコ洗剤で安心仕上げ。",
        price: "16,800円（税込）〜",
        special: "14,800円（税込）〜",
        note: "",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wet_area_5-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/",
    },
    {
        title: "水回り5点セット",
        text: "キッチン・レンジフード・浴室・洗面台・トイレをまとめてお得に。",
        price: "82,000円（税込）",
        special: "60,800円（税込）",
        note: "まとめてお得!!",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wet_area_5-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/wet_area_5/",
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

const KitchenPage: FC = () => {
    return (
        <main className="aircon-page kitchen-page page page--kitchen">
            <section className="aircon-hero">
                <div className="container aircon-hero__inner">
                    <div className="aircon-hero__content">
                        <span className="aircon-hero__eyebrow">KITCHEN</span>
                        <h1>BEPPO！（ベッポ）のキッチンクリーニング</h1>
                        <p className="aircon-hero__lead">レンジフード・コンロ・シンクをまとめて徹底洗浄</p>
                        <p className="aircon-hero__description">油汚れと水垢をエコ洗剤でしっかり落とし、においもベタつきもスッキリ。分解洗浄と撥水仕上げでキッチンを清潔に保ちます。</p>
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
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" alt="キッチンクリーニング" loading="lazy" />
                        <div className="aircon-hero__badge">
                            <span>エコ洗剤仕上げ</span>
                            <strong>換気扇分解洗浄にも対応</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-intro" id="introduction">
                <div className="container aircon-intro__inner">
                    <div className="aircon-intro__main">
                        <div className="aircon-intro__image">
                            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80" alt="キッチンのクリーニング" loading="lazy" />
                        </div>
                        <div className="aircon-intro__text">
                            <h2>油汚れと水垢を徹底除去し、清潔で明るいキッチンへ</h2>
                            <p>毎日使うキッチンは油汚れや水垢が蓄積しやすく、ベタつきやにおいの原因になります。プロの分解洗浄と研磨仕上げで、見た目も衛生面もリフレッシュ。</p>
                            <p>レンジフード・コンロ・シンクをまとめて洗浄し、エコ洗剤で身体にも環境にもやさしいクリーニングを行います。</p>
                            <p className="aircon-intro__note">※作業時間の目安：キッチン一式 2〜3時間（汚れ具合で変動します）。</p>
                            <div className="aircon-intro__models">
                                <span className="aircon-pill">対応範囲</span>
                                <p>レンジフード（プロペラ・シロッコ） / ガス・IHコンロ / 魚焼きグリル / シンク・水栓 / 食洗機 / キッチンパネル・収納扉など</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-feature" id="feature">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FEATURE</p>
                        <h2>油も水垢も、まとめてリセット</h2>
                        <p className="aircon-section-heading__lead">分解・浸け置き・高圧洗浄・研磨の4ステップでキッチン全体をクリーニング。</p>
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
                        <p className="aircon-section-heading__lead">油汚れ・水垢・においを一気にリセット。仕上がりを写真でご確認ください。</p>
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
                        <p className="aircon-section-heading__lead">複数メニュー同時のご依頼でお得にご利用いただけます。</p>
                    </div>
                    <div className="aircon-price__grid">
                        {priceList.map((item) => (
                            <article key={item.name} className="aircon-card aircon-card--price">
                                <div className="aircon-card__body">
                                    <h3>{item.name}</h3>
                                    <p className="aircon-price__main">{item.price}</p>
                                    <div className="aircon-price__special">
                                        <span className="aircon-pill aircon-pill--accent">セット特典</span>
                                        <p className="aircon-price__special-value">{item.special}</p>
                                        <p className="aircon-price__note">{item.note}</p>
                                    </div>
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
                        <h2>オプション</h2>
                        <p className="aircon-section-heading__lead">汚れが気になる箇所をピンポイントで強化できます。</p>
                    </div>
                    <div className="aircon-options__grid">
                        {optionItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--option">
                                <div className="aircon-card__image">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className="aircon-card__body">
                                    <div className="aircon-card__title">
                                        <span className="aircon-pill">人気</span>
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
                        <p className="aircon-section-heading__lead">キッチンクリーニングのご感想を紹介します。</p>
                    </div>
                    <div className="aircon-voice__list">
                        {voices.map((item) => (
                            <article key={item.text} className="aircon-card aircon-card--voice">
                                <div className="aircon-voice__meta">
                                    <div>
                                        <p className="aircon-voice__label">ご利用サービス</p>
                                        <p className="aircon-voice__value">{item.service}</p>
                                    </div>
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
                        <p className="aircon-section-heading__lead">養生から仕上げ確認まで、7ステップで安心施工。</p>
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

            <section className="aircon-work" id="work">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">OUR WORK</p>
                        <h2>キッチンクリーニングの事例</h2>
                        <p className="aircon-section-heading__lead">分解洗浄や研磨仕上げの事例をピックアップしました。</p>
                    </div>
                    <div className="aircon-work__grid">
                        {workItems.map((item) => (
                            <article key={item.title} className="aircon-card aircon-card--work">
                                <div className="aircon-work__images">
                                    <div className="aircon-comparison__image-block">
                                        <span className="aircon-comparison__tag aircon-comparison__tag--before">BEFORE</span>
                                        <img src={item.before} alt="お掃除前" loading="lazy" />
                                    </div>
                                    <div className="aircon-comparison__image-block">
                                        <span className="aircon-comparison__tag aircon-comparison__tag--after">AFTER</span>
                                        <img src={item.after} alt="お掃除後" loading="lazy" />
                                    </div>
                                </div>
                                <div className="aircon-card__body">
                                    <div className="aircon-work__meta">
                                        <ul className="aircon-work__tags">
                                            {item.area.map((area) => (
                                                <li key={area}>{area}</li>
                                            ))}
                                            <li>{item.category}</li>
                                        </ul>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <div className="aircon-work__link">
                                        <a className="aircon-button aircon-button--ghost" href={item.link} target="_blank" rel="noreferrer">
                                            詳しく見る
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aircon-faq" id="faq">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FAQ</p>
                        <h2>キッチンクリーニングに関するよくあるご質問</h2>
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
                        <h2>キッチンクリーニングはこんな方におすすめ</h2>
                    </div>
                    <div className="aircon-recommend__content">
                        <p>油や水垢が蓄積しやすいキッチンは、プロの分解洗浄で定期的にリセットするのが安心です。</p>
                        <p>こんな方におすすめです。</p>
                        <ul>
                            <li>レンジフードの吸い込みが弱くなった</li>
                            <li>コンロや壁面のベタつきが気になる</li>
                            <li>シンクの水垢・くすみが取れない</li>
                            <li>排水口のにおいが気になる</li>
                            <li>出産や来客前にキッチンを清潔にしておきたい</li>
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
                                    <div className="aircon-related__prices">
                                        <p className="aircon-price__main aircon-price__main--small">{item.price}</p>
                                        {item.special ? (
                                            <div className="aircon-related__special">
                                                <p className="aircon-price__special-value">{item.special}</p>
                                                {item.note ? <p className="aircon-price__note">{item.note}</p> : null}
                                            </div>
                                        ) : null}
                                    </div>
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

export default KitchenPage;
