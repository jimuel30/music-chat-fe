export interface Image {
    width: number;
    url: string;
    height: number;
}

export interface Followers {
    total: number;
    href: string | null;
}

export interface ExternalUrls {
    spotify: string;
}

export interface ArtistObject {
    images: Image[];
    followers: Followers;
    genres: string[];
    popularity: number;
    name: string;
    href: string;
    id: string;
    type: string;
    external_urls: ExternalUrls;
    uri: string;
}
