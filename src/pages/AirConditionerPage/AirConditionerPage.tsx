import { type FC } from "react";
import "./AirConditionerPage.scss";

const featureItems = [
    {
        title: "普段のお手入れでは難しいエアコン内部の汚れを徹底除去します",
        description: "エアコンの外側カバーを外し、内部のアルミフィン（熱交換器）やファンに付着したカビやホコリ汚れを高圧洗浄機を使い徹底的に洗浄します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E5%88%86%E8%A7%A3.jpg",
    },
    {
        title: "環境、エアコンにもやさしいエコ洗剤を使用",
        description: "環境に有害な成分が含まれていない、やさしいエコ洗剤を使用してクリーニングします。アルミフィンの親水被膜や樹脂パーツも傷つけない、人にもやさしい洗浄です。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E9%AB%98%E5%9C%A7_.jpg",
    },
    {
        title: "完全ナチュラルエアコンクリーニングもご対応可能",
        description: "洗剤を一切使用せず、アルカリ電解水と天然のアルコールで汚れを分解し、高温スチームで浮かせた汚れを高圧洗浄します。徹底的にナチュラルにこだわりたい方におすすめです。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/08/%E3%83%8A%E3%83%81%E3%83%A5%E3%83%A9%E3%83%AB%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3.jpg",
    },
    {
        title: "BEPPO！スタッフが丁寧にご対応いたします！",
        description: "お問い合わせからクリーニング当日まで、安心安全なクリーニングを提供できるスタッフがしっかりご対応。ご質問や気になる事など、何でもお気軽にご相談ください。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2023/09/%E3%82%B9%E3%82%BF%E3%83%83%E3%83%95%E5%85%A8%E5%93%A1.jpg",
    },
];

const comparisonItems = [
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con2_b-1.jpg",
            alt: "エアコンクリーニングのお掃除前（アルミフィン）",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con2_a-1.jpg",
            alt: "エアコンクリーニングのお掃除後（アルミフィン）",
        },
        text: "エアコン内部のアルミフィン（熱交換器）のホコリのつまりやカビを、エアコン用エコ洗剤で分解し、高圧洗浄機を使って洗い流します。",
    },
    {
        before: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con_b.jpg",
            alt: "エアコンクリーニングのお掃除前（吹出口）",
        },
        after: {
            src: "https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con_a.jpg",
            alt: "エアコンクリーニングのお掃除後（吹出口）",
        },
        text: "空気の吹出し口の奥のシロッコファンのホコリやカビも、エコ洗剤と高圧洗浄機を使って洗い流します。分解したフィルター等のパーツも丁寧に洗浄します。",
    },
];

const priceList = [
    {
        name: "通常タイプ",
        price: "12,800円（税込）",
        special: "11,800円（税込）",
        note: "2台以上のご予約で 1台11,300円！",
    },
    {
        name: "お掃除機能付き",
        price: "19,800円（税込）",
        special: "18,800円（税込）",
        note: "2台以上のご予約で 1台18,300円！",
    },
];

const optionItems = [
    {
        title: "室外機分解洗浄",
        description: "室外機内部のファンとアルミフィンを高圧洗浄。砂埃や泥等を除去して熱効率をアップさせます。",
        price: "3,500円（税込）",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con-op01-670x300.jpg",
    },
    {
        title: "防カビコーティング",
        description: "内部ファン、熱交換器等へ防カビ剤を塗布し、仕上がりを長持ちさせます。",
        price: "2,000円（税込）",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con-op02-670x300.jpg",
    },
    {
        title: "100%ナチュラルエアコンクリーニング",
        description: "高温スチームとアルカリ電解水＋天然のアルコールのみを使った完全ナチュラル仕上げ。敏感な方にもおすすめです。",
        price: "＋5,000円（税込）",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%83%8A%E3%83%81%E3%83%A5%E3%83%A9%E3%83%AB%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3_2-670x300.jpg",
    },
];

const voices = [
    {
        area: "名古屋市",
        service: "エアコン",
        rating: 5,
        text: "夏前に急に暑くなりエアコンをつけたらすごくカビ臭いニオイがしたので、エアコンクリーニングをお願いしました。作業前にしっかりと説明があり、テキパキと作業されていたので安心してお任せできました。真っ黒い水を見てびっくり！ニオイも消えて快適になりました！",
    },
    {
        area: "大府市",
        service: "エアコン",
        rating: 5,
        text: "出産前に赤ちゃんのためと思い急遽依頼。通常エアコン2台を素早く作業してくださり、気になっていたニオイがなくなりました。LINEの返信も早く丁寧。また利用したいです。",
    },
    {
        area: "豊田市",
        service: "エアコン",
        rating: 5,
        text: "エアコンクリーニングと抗菌作業を依頼。ビフォーアフターの写真を見せてくれ、掃除方法も親切に教えてくれました。室外機はまだきれいだから次回で大丈夫、と正直に教えてくれたのも好印象です。",
    },
];

const flowSteps = [
    {
        step: 1,
        title: "エアコンの確認・ヒアリング",
        text: "クリーニングするエアコンを確認し、注意点などを共有します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/08/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E3%83%92%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%99-540x540.jpg",
    },
    {
        step: 2,
        title: "道具の搬入・作業場所の養生",
        text: "道具を搬入し、養生シートやテープで作業場所をしっかり保護します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/08/%E9%81%93%E5%85%B7%E6%90%AC%E5%85%A5-540x540.jpg",
    },
    {
        step: 3,
        title: "エアコンの分解",
        text: "動作確認を行ったうえでエアコンを分解し、洗浄準備を進めます。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E5%88%86%E8%A7%A32-540x540.jpg",
    },
    {
        step: 4,
        title: "エアコン本体、パーツの高圧洗浄",
        text: "洗浄液を散布し、高圧洗浄機で本体と分解パーツの汚れを洗い落とします。外やベランダの水栓、またはお風呂場をお借りします。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E9%AB%98%E5%9C%A7-1-540x540.jpg",
    },
    {
        step: 5,
        title: "エアコンの組み立て・動作確認",
        text: "洗浄後に組み立てを行い、動作確認を実施します。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E7%B5%84%E3%81%BF%E7%AB%8B%E3%81%A6-540x540.jpg",
    },
    {
        step: 6,
        title: "クリーニング後のご確認",
        text: "仕上がり状況をスタッフが説明し、お客様にもご確認いただきます。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/08/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E5%AE%8C%E4%BA%86-540x540.jpg",
    },
    {
        step: 7,
        title: "お支払い",
        text: "仕上がりにご納得いただけましたら、現金またはクレジットカードでお支払いください。",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/%E4%BC%9A%E8%A8%88-540x540.jpg",
    },
];

const workItems = [
    {
        area: ["名古屋市", "愛知県"],
        category: "エアコンクリーニング",
        title: "【エアコンクリーニング】お掃除機能付きナショナルCS-40RGX2-N名古屋市のお客様",
        before: "https://www.beppo.co.jp/wp-content/uploads/2020/05/200504_b_02-250x250.jpg",
        after: "https://www.beppo.co.jp/wp-content/uploads/2020/05/200504_a_02-540x540.jpg",
        link: "https://www.beppo.co.jp/work/work-696/",
    },
    {
        area: ["名古屋市", "愛知県"],
        category: "エアコンクリーニング",
        title: "【エアコンクリーニング】お掃除機能付き三菱霧ヶ峰MSZ-GS259-W名古屋市のお客様",
        before: "https://www.beppo.co.jp/wp-content/uploads/2020/05/020415_b_03-250x250.jpg",
        after: "https://www.beppo.co.jp/wp-content/uploads/2020/05/020415_a_03-540x540.jpg",
        link: "https://www.beppo.co.jp/work/502/",
    },
    {
        area: ["桑名市", "三重県"],
        category: "エアコンクリーニング",
        title: "【エアコンクリーニング】お掃除機能付き三菱霧ヶ峰MSZ-ZW402S-W桑名市のお客様",
        before: "https://www.beppo.co.jp/wp-content/uploads/2020/05/020416_b_04-250x250.jpg",
        after: "https://www.beppo.co.jp/wp-content/uploads/2020/05/020416_a_01-540x540.jpg",
        link: "https://www.beppo.co.jp/work/work-519/",
    },
    {
        area: ["名古屋市", "愛知県"],
        category: "エアコンクリーニング",
        title: "【エアコンクリーニング】ナショナルCS-22RGH-W名古屋市のお客様",
        before: "https://www.beppo.co.jp/wp-content/uploads/2020/05/200504_b_07-250x250.jpg",
        after: "https://www.beppo.co.jp/wp-content/uploads/2020/05/200504_a_07-540x540.jpg",
        link: "https://www.beppo.co.jp/work/work-697/",
    },
    {
        area: ["岡崎市", "愛知県"],
        category: "エアコンクリーニング",
        title: "【エアコンクリーニング】パナソニックCS-F403C2-W岡崎市のお客様",
        before: "https://www.beppo.co.jp/wp-content/uploads/2020/05/200427_b_02-1-250x250.jpg",
        after: "https://www.beppo.co.jp/wp-content/uploads/2020/05/200427_a_02-540x540.jpg",
        link: "https://www.beppo.co.jp/work/work-567/",
    },
];

const faqItems = [
    {
        question: "クリーニング当日までに準備しておく事はありますか。",
        answer: "エアコンの下に1.5×1.5m程度の作業スペースをご用意ください。分解したパーツを洗浄するため浴室や屋外の水栓をお借りします。動作確認でリモコンを使用しますので、電池切れのない状態でご準備ください。",
    },
    {
        question: "作業時間はどのくらいですか。",
        answer: "1台につきノーマルタイプで約2時間、お掃除機能付きタイプで約3時間が目安です。オプションの追加がある場合はその分、作業時間が増えます。",
    },
    {
        question: "お掃除機能付きかどうかわかりません。",
        answer: "ご予約時にエアコン本体と型番が記載された部分の写真をお送りください。弊社で確認いたします。",
    },
    {
        question: "作業中は何をしていれば良いですか？外出しても良いですか？",
        answer: "作業はスタッフにお任せいただき、ご自由にお過ごしください。外出も可能です。お戻り時間を確認させていただきますので事前にお伝えください。鍵の預かりとポスト返却にも対応しています。",
    },
    {
        question: "ペットがいても大丈夫ですか。",
        answer: "問題ありません。作業の妨げにならない程度にご配慮いただけますと幸いです。",
    },
    {
        question: "駐車スペースが無い場合はどうなりますか。",
        answer: "近隣のコインパーキングを利用します。名古屋市中区・名駅エリアは駐車料金として一律1,000円を頂戴し、その他エリアは当店が全額負担いたします。",
    },
];

const recommendMenuItems = [
    {
        title: "天井エアコンクリーニング",
        text: "一般、業務用の天井エアコンもお任せください。",
        price: "24,000円（税込）",
        special: "22,000円（税込）〜",
        note: "2台以上のご予約で 1台21,000円！",
        image: "https://www.beppo.co.jp/wp-content/uploads/2022/10/%E5%A4%A9%E4%BA%95%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/ceiling-air-con/",
    },
    {
        title: "水回り5点セット",
        text: "レンジフード（換気扇）、キッチン 、浴室、洗面台、トイレの5箇所をセットにしたお得なプランです。",
        price: "82,000円（税込）",
        special: "60,800円（税込）",
        note: "まとめてお得!!",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/wet_area_5-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/wet_area_5/",
    },
    {
        title: "お引越し・入居前ハウスクリーニング",
        text: "分譲マンション・一戸建ての入居前住居を徹底クリーニング。フローリングWAXもご相談ください。",
        price: "103,800円（税込）〜",
        image: "https://www.beppo.co.jp/wp-content/uploads/2020/03/empty_room-574x444.jpg",
        link: "https://www.beppo.co.jp/menu/empty_room/",
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

const AirConditionerPage: FC = () => {
    return (
        <main className="aircon-page page page--air-conditioner">
            <section className="aircon-hero">
                <div className="container aircon-hero__inner">
                    <div className="aircon-hero__content">
                        <span className="aircon-hero__eyebrow">AIR CONDITIONER</span>
                        <h1>BEPPO！（ベッポ）のエアコンクリーニング</h1>
                        <p className="aircon-hero__lead">エアコン高圧洗浄</p>
                        <p className="aircon-hero__description">エコ洗剤を使った安全なエアコンクリーニングで、カビやホコリを徹底除去。お掃除機能付きエアコンにも対応し、安心・丁寧に仕上げます。</p>
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
                        <img src="https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con-880x530.jpg" alt="エアコンクリーニング" loading="lazy" />
                        <div className="aircon-hero__badge">
                            <span>エコ洗剤仕上げ</span>
                            <strong>お掃除機能付きも対応</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-intro" id="introduction">
                <div className="container aircon-intro__inner">
                    <div className="aircon-intro__main">
                        <div className="aircon-intro__image">
                            <img src="https://www.beppo.co.jp/wp-content/uploads/2020/03/air-con-768x463.jpg" alt="分解して丁寧に洗浄する様子" loading="lazy" />
                        </div>
                        <div className="aircon-intro__text">
                            <h2>エコ洗剤を使った安全エアコンクリーニング</h2>
                            <p>室内の空気は外の空気よりも数倍汚れていると言われています。温度差が激しい日本ではエアコンを使う期間が長く、徐々に本体に汚れが溜まっていきます。</p>
                            <p>室内の空気を守るためにも定期的なエアコンクリーニングは必須。BEPPO！ではエアコンを分解し、専用カバーで保護した上で高圧洗浄機を使い徹底洗浄。環境と身体に優しいエコ洗剤でカビやホコリを取り除きます。</p>
                            <p className="aircon-intro__note">※通常エアコンは約2時間、お掃除機能付きエアコンは約3時間が目安です。</p>
                            <div className="aircon-intro__models">
                                <span className="aircon-pill">対応機種</span>
                                <p>ダイキン・三菱・富士通・日立・シャープ・パナソニック・東芝・その他日本製機種</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aircon-feature" id="feature">
                <div className="container">
                    <div className="aircon-section-heading">
                        <p className="aircon-section-heading__eyebrow">FEATURE</p>
                        <h2>環境や人に優しいエアコンクリーニング</h2>
                        <p className="aircon-section-heading__lead">ナチュラルと徹底洗浄を両立したクリーニングをご提供します。</p>
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
                        <p className="aircon-section-heading__lead">高圧洗浄で内部までスッキリ。仕上がりの違いを写真でご確認ください。</p>
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
                        <p className="aircon-section-heading__lead">2台以上のご予約でさらにお得にご利用いただけます。</p>
                    </div>
                    <div className="aircon-price__grid">
                        {priceList.map((item) => (
                            <article key={item.name} className="aircon-card aircon-card--price">
                                <div className="aircon-card__body">
                                    <h3>{item.name}</h3>
                                    <p className="aircon-price__main">{item.price}</p>
                                    <div className="aircon-price__special">
                                        <span className="aircon-pill aircon-pill--accent">複数台特典</span>
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
                        <p className="aircon-section-heading__lead">セットで頼むと仕上がりと持続力がアップします。</p>
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
                        <p className="aircon-section-heading__lead">ご満足いただいたお客様の口コミをピックアップしました。</p>
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
                        <p className="aircon-section-heading__lead">丁寧な7ステップで安心の仕上がりをお約束します。</p>
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
                        <h2>「エアコンクリーニング」のBefore / After</h2>
                        <p className="aircon-section-heading__lead">クリーニング事例をピックアップしてご紹介します。</p>
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
                        <h2>エアコンクリーニングに関するよくあるご質問</h2>
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
                        <h2>エアコンクリーニングはこんな方におすすめ</h2>
                    </div>
                    <div className="aircon-recommend__content">
                        <p>毎日のように使うエアコンはホコリが蓄積しやすく、部屋の空気も汚れがちです。内部のお掃除はプロに任せるのがいちばん確実です。</p>
                        <p>BEPPO！のエアコンクリーニングは、下記のようなお悩みをお持ちの方におすすめです。</p>
                        <ul>
                            <li>3年以上同じエアコンを使っている</li>
                            <li>吹出口が黒ずんできた、カビ臭さが気になる</li>
                            <li>内部シロッコファンに汚れが溜まっている</li>
                            <li>エアコンの効きが悪く感じる</li>
                            <li>出産前などで空気を清潔に保ちたい</li>
                            <li>物件入居前後に備え付けエアコンを一度リセットしたい</li>
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

export default AirConditionerPage;
