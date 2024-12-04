import { colors } from "./colors";

export interface Track {
    title: string;
    duration: string;
    artist: string; // Nuevo campo
}

export interface Playlist {
    id: string;
    cover: string;
    name: string;
    artists: string[];
    color: typeof colors[keyof typeof colors];
    tracks: Track[];
}

export const playlistsData: Playlist[] = [
    {
        id: "01",
        cover: "https://i.scdn.co/image/ab67706f00000002e3e5714c9ba7adbbeff48449",
        name: "Pop Hits",
        artists: ["Estopa", "Melendi", "El Canto del Loco"],
        color: colors.blue,
        tracks: [
            { title: "La Raja de Tu Falda", duration: "3:45", artist: "Estopa" },
            { title: "Tú de Mi", duration: "4:13", artist: "Melendi" },
            { title: "Loco", duration: "3:29", artist: "El Canto del Loco" },
            { title: "Caminando por la Vida", duration: "3:19", artist: "Melendi" },
            { title: "Desde Que No Te Tengo", duration: "3:49", artist: "Estopa" },
            { title: "El Canto del Loco", duration: "2:55", artist: "El Canto del Loco" },
            { title: "Mi Lugar", duration: "3:02", artist: "Estopa" },
            { title: "Un Día en el Mundo", duration: "3:10", artist: "El Canto del Loco" },
            { title: "Los Amigos", duration: "3:40", artist: "Melendi" },
            { title: "En El Mundo Todo Va Bien", duration: "3:15", artist: "Estopa" }
        ],
    },
    {
        id: "02",
        cover: "https://pbs.twimg.com/media/Gdgf3GoXgAAciAO.jpg",
        name: "Vibes of Spain",
        artists: ["Quevedo", "Aitana", "Morat"],
        color: colors.pink,
        tracks: [
            { title: "Quédate", duration: "3:24", artist: "Quevedo" },
            { title: "Punto de Partida", duration: "3:47", artist: "Aitana" },
            { title: "No Termino", duration: "4:00", artist: "Morat" },
            { title: "De Cero", duration: "3:07", artist: "Aitana" },
            { title: "Enamórate de Alguien Más", duration: "3:49", artist: "Morat" },
            { title: "Mi Pesadilla", duration: "3:25", artist: "Quevedo" },
            { title: "Date La Vuelta", duration: "3:17", artist: "Aitana" },
            { title: "La Noche", duration: "3:38", artist: "Morat" },
            { title: "Primeras Veces", duration: "3:12", artist: "Quevedo" },
            { title: "Bajo la Mesa", duration: "2:37", artist: "Aitana" }
        ],
    },
    {
        id: "03",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c42baef97a651b7badb256a0e",
        name: "Reggaeton Hits",
        artists: ["Bad Bunny", "Myke Towers", "Eladio Carrión"],
        color: colors.orange,
        tracks: [
            { title: "Vete", duration: "3:31", artist: "Bad Bunny" },
            { title: "Safaera", duration: "4:53", artist: "Bad Bunny" },
            { title: "Soy Peor", duration: "3:26", artist: "Bad Bunny" },
            { title: "Ella Quiere Beber", duration: "3:15", artist: "Anuel AA" },
            { title: "Diles", duration: "3:21", artist: "Bad Bunny" },
            { title: "Me Porto Bonito", duration: "3:10", artist: "Bad Bunny" },
            { title: "Baila Baila Baila", duration: "4:02", artist: "Bad Bunny" },
            { title: "Ponle", duration: "3:00", artist: "Myke Towers" },
            { title: "Bichiyal", duration: "3:17", artist: "Bad Bunny" },
            { title: "Adicto", duration: "3:43", artist: "Anuel AA" }
        ],
    },
    {
        id: "04",
        cover: "https://seed-mix-image.spotifycdn.com/v6/img/artist/0Q8NcsJwoCbZOHHW63su5S/es/default",
        name: "Latin Vibes",
        artists: ["Feid", "Mora"],
        color: colors.green,
        tracks: [
            { title: "Yandel 150", duration: "3:13", artist: "Feid" },
            { title: "La Inocente", duration: "3:36", artist: "Mora" },
            { title: "Quédate", duration: "3:24", artist: "Feid" },
            { title: "Mi Lugar", duration: "3:25", artist: "Mora" },
            { title: "Tú", duration: "3:02", artist: "Feid" },
            { title: "Te Fuiste", duration: "2:59", artist: "Mora" },
            { title: "Contigo", duration: "3:44", artist: "Feid" },
            { title: "No Te Vayas", duration: "3:14", artist: "Mora" },
            { title: "Otro Trago", duration: "3:12", artist: "Feid" },
            { title: "Dímelo", duration: "3:47", artist: "Mora" }
        ],
    },
    {
        id: "05",
        cover: "https://i.scdn.co/image/ab67706f000000025d399e2a89de3b33fcbb3bc5",
        name: "Verano 2024",
        artists: ["Feid", "Mora"],
        color: colors.green,
        tracks: [
            { title: "Yandel 150", duration: "3:13", artist: "Feid" },
            { title: "La Inocente", duration: "3:36", artist: "Mora" },
            { title: "Quédate", duration: "3:24", artist: "Feid" },
            { title: "Mi Lugar", duration: "3:25", artist: "Mora" },
            { title: "Tú", duration: "3:02", artist: "Feid" },
            { title: "Te Fuiste", duration: "2:59", artist: "Mora" },
            { title: "Contigo", duration: "3:44", artist: "Feid" },
            { title: "No Te Vayas", duration: "3:14", artist: "Mora" },
            { title: "Otro Trago", duration: "3:12", artist: "Feid" },
            { title: "Dímelo", duration: "3:47", artist: "Mora" }
        ],
    }
];
