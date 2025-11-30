import type { ContactInfo, GridCard, NavigationLink } from "../types/content";

export const primaryLinks: NavigationLink[] = [
    { label: "トップページ", href: "/" },
    { label: "エアコンお掃除", href: "/air-conditioner/" },
    { label: "キッチンお掃除", href: "/kitchen/" },
    { label: "洗濯機お掃除", href: "/washing-machine/" },
    { label: "その他のお掃除プラン", href: "/other-plans/" },
    { label: "まとめてプラン", href: "/set-plans/" },
];

export const secondaryLinks: NavigationLink[] = [
    { label: "新着情報", href: "/sitemap/" },
    { label: "55Reformのハウスクリーニング", href: "/contact/" },
    { label: "ブログ記事", href: "/sitemap/" },
    { label: "法人のお客様はこちら", href: "/privacy_policy/" },
    { label: "55Reform パートナー募集", href: "/sitemap/" },
    { label: "お問合せ", href: "/contact/" },
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
