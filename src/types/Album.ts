export interface Album {
    album_type: string;
    artists: Array<{
        id: string;
        name: string;
        type: string;
        uri: string;
    }>;
    external_urls: {
        spotify: string;
    };
    id: string;
    images: Array<{
        height: number;
        url: string;
        width: number;
    }>;
    name: string;
    release_date: string;
    total_tracks: number;
    tracks: {
        href: string;
        items: Array<{
            id: string;
            name: string;
            preview_url: string;
            track_number: number;
            uri: string;
        }>;
        limit: number;
        offset: number;
        total: number;
    };
    uri: string;
}
  