import { colors } from "./colors";

export interface Track {
    id: string;
    name: string;
    duration: string;
    artist: Artist['id'];
    album?: Album['id']
}

export interface Album {
    id: string
    cover: string
    name: string
    artist: Artist['id']
    releaseYear: number
    color: typeof colors[keyof typeof colors]
}

export interface Artist {
    id: string;
    name: string;
    photo: string;
    topTracks: Track['id'][];
    topAlbums: Album['id'][];
}

export interface Playlist {
    id: string;
    cover: string;
    name: string;
    artists: Artist['id'][];
    color: typeof colors[keyof typeof colors];
    tracks: Track['id'][];
}