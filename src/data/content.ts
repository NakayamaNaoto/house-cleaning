import type { ContactInfo, GridCard, NavigationLink } from "../types/content";

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
