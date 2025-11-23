export interface GridCard {
    title: string;
    body: string;
    image: string;
}

export interface ContactInfo {
    tel: string;
    hours: string;
}

export interface NavigationLink {
    label: string;
    href: string;
    external?: boolean;
}
