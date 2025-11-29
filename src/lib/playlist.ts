import type { Playlist } from "./types";
import { tracksData } from "./tracks";
import { colors } from "./colors";

export const playlistsData: Playlist[] = [
    {
        id: 'Playlist_001',
        cover: 'ab67706f000000029b73cb54758543d78a8ae4e0',
        name: 'Los 2000 España',
        artists: ['Melendi_artist', "Estopa_artist", "ElCantoDelLoco_artist"],
        color: colors.indigo,
        tracks: tracksData
        .filter(track => track.artist === 'Melendi_artist' || track.artist === 'Estopa_artist' || track.artist === 'ElCantoDelLoco_artist')
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
    },
    {
        id: 'Playlist_002',
        cover: 'ab67706c0000da8402780e9620415e86c96d2bf8',
        name: 'Feid & Mora',
        artists: ["Feid_artist", "Mora_artist"],
        color: colors.green,
        tracks: tracksData
        .filter(track => track.artist === 'Feid_artist' || track.artist === 'Mora_artist')
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
    },
    {
        id: 'Playlist_003',
        cover: 'ab67706f000000029c0eb2fdff534f803ea018e1',
        name: 'This is Bad Bunny',
        artists: ["BadBunny_artist"],
        color: colors.orange,
        tracks: tracksData
        .filter(track => track.artist === 'BadBunny_artist')
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
    },
    {
        id: 'Playlist_004',
        cover: 'ab67706c0000da841588d46eeb9d900b31b0e585',
        name: 'Myke Towers SETLIST',
        artists: ["MykeTowers_artist"],
        color: colors.blue,
        tracks: tracksData
        .filter(track => track.artist === 'MykeTowers_artist')
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
    },
    {
        id: 'Playlist_005',
        cover: 'ab67706c0000da842c9fd150af5fb4d7fb350a93',
        name: 'Lo mejor de Morat',
        artists: ["Morat_artist"],
        color: colors.red,
        tracks: tracksData
        .filter(track => track.artist === 'Morat_artist')
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
    },
    {
        id: 'Playlist_006',
        cover: 'ab67616d0000b2733ec066af4d33ea367f22cbee',
        name: 'Pop Latino 2024',
        artists: ["Aitana_artist", "Morat_artist", "Quevedo_artist"],
        color: colors.pink,
        tracks: tracksData
        .filter(track => track.artist === 'Aitana_artist' || track.artist === 'Morat_artist' || track.artist === 'Quevedo_artist')
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
    },
];
