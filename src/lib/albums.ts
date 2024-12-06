import type { Album } from "./types";
import { colors } from "./colors";

export const albumsData: Album[] = [
    {
        id: 'Quevedo_album_001',
        cover: 'https://i.scdn.co/image/ab67616d0000b2734b690afba75a356fcdad526e',
        name: 'Buenas noches',
        artist: 'Quevedo_artist',
        releaseYear: 2022,
        color: colors.indigo
    },
    {
        id: 'BadBunny_album_001',
        cover: 'https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec',
        name: 'Nadie sabe lo que va a pasar mañana',
        artist: 'BadBunny_artist',
        releaseYear: 2023,  
        color: colors.red
    },
    {
        id: 'Feid_album_001',
        cover: 'https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242',
        name: 'Ferxxocalipsis',
        artist: 'Feid_artist',
        releaseYear: 2023,  
        color: colors.green
    },
    {
        id: "Morat_album_001",
        cover: "https://i.scdn.co/image/ab67616d0000b27302bf1057986d3d64dec7e66a",
        name: "¿A Dónde Vamos?",
        artist: "Morat_artist",
        releaseYear: 2021,
        color: colors.gray,
    }, 
    {
        id: "MykeTowers_album_001",
        cover: "https://i.scdn.co/image/ab67616d0000b273f5efed2f29ab39ebab066e2a",
        name: "LA PANTERA NEGRA",
        artist: "MykeTowers_artist",
        releaseYear: 2024,
        color: colors.orange
    },  
    {
        id: "BadBunny_album_002",
        cover: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
        name: "Un verano sin ti",
        artist: "BadBunny_artist",
        releaseYear: 2022,
        color: colors.yellow
    },  
]