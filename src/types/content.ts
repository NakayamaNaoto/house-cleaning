export interface FeatureCard {
    title: string;
    body: string[];
    image: string;
}

export interface PointCard {
    label: string;
    title: string[];
    body: string[];
    image: string;
}

export interface PlanCard {
    label: string;
    title: string;
    subtitle: string;
    body: string[];
    image: string;
}

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
