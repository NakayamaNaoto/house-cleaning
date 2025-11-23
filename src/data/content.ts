import type { ContactInfo, GridCard, NavigationLink, PlanCard } from "../types/content";

export const primaryLinks: NavigationLink[] = [
    { label: "トップページ", href: "/" },
    { label: "メニュー", href: "/menu/" },
    { label: "ギャラリー", href: "/gallery/" },
    { label: "よくある質問", href: "/faq/" },
    { label: "新着情報", href: "/new_page/" },
    { label: "名古屋 | ブライダル", href: "/bridal/" },
    { label: "名古屋 | スポーツ", href: "/sports/" },
    { label: "アクセス", href: "/access/" },
];

export const secondaryLinks: NavigationLink[] = [
    { label: "お問い合わせ", href: "/contact/" },
    { label: "用語集", href: "/dictionary/" },
    { label: "プライバシーポリシー", href: "/privacy_policy/" },
    { label: "サイトマップ", href: "/sitemap/" },
];

export const socialLinks = [
    { label: "LINE", href: "https://lin.ee/RZedPno" },
    { label: "Instagram", href: "https://www.instagram.com/huaobst.2021/" },
];

export const planCards: PlanCard[] = [
    {
        label: "01",
        title: "大掃除シーズンに大人気！",
        subtitle: "お掃除代行3点セット",
        body: ["【レンジフード、キッチン 、浴室、お掃除機能付きエアコン】から2点、【トイレ、洗面台、通常エアコン】から1点、計3点お好きなクリーニング箇所をお選びいただけるお得なプランです。"],
        image: "/images/plan-1.jpg",
    },
    {
        label: "02",
        title: "しつこい水アカ、カビ汚れに",
        subtitle: "水回り5点セット",
        body: ["レンジフード（換気扇）、キッチン 、浴室、洗面台、トイレの水回り5箇所をまとめてお掃除するお得なお掃除代行プランです。", "※作業時間目安は6時間程度の想定となります。"],
        image: "/images/plan-2.jpg",
    },
    {
        label: "03",
        title: "こびりついた油汚れも徹底除去！",
        subtitle: "キッチン＆レンジフードセット",
        body: ["サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"],
        image: "/images/plan-3.jpg",
    },
];

export const gridCards: GridCard[] = [
    {
        title: "見出しが入ります",
        body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプト",
        image: "/images/grid-1.jpg",
    },
    {
        title: "見出しが入ります",
        body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        image: "/images/grid-2.jpg",
    },
    {
        title: "見出しが入ります",
        body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        image: "/images/grid-3.jpg",
    },
    {
        title: "見出しが入ります",
        body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        image: "/images/grid-4.jpg",
    },
    {
        title: "見出しが入ります",
        body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        image: "/images/grid-5.jpg",
    },
    {
        title: "見出しが入ります",
        body: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        image: "/images/grid-6.jpg",
    },
];

export const contactInfo: ContactInfo = {
    tel: "052-990-3015",
    hours: "8:00～22:00",
};
