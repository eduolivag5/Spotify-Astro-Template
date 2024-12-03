import { colors } from "./colors";

export interface Track {
    title: string;
    duration: string;
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
        id: "popPlaylist01",
        cover: "https://i.scdn.co/image/ab67706f00000002e3e5714c9ba7adbbeff48449",
        name: "Pop Hits",
        artists: ["Estopa", "Melendi", "El Canto del Loco"],
        color: colors.blue,
        tracks: [
            { title: "La Raja de Tu Falda", duration: "3:45" },
            { title: "Tú de Mi", duration: "4:13" },
            { title: "Loco", duration: "3:29" },
            { title: "Caminando por la Vida", duration: "3:19" },
            { title: "Desde Que No Te Tengo", duration: "3:49" },
            { title: "El Canto del Loco", duration: "2:55" },
            { title: "Mi Lugar", duration: "3:02" },
            { title: "Un Día en el Mundo", duration: "3:10" },
            { title: "Los Amigos", duration: "3:40" },
            { title: "En El Mundo Todo Va Bien", duration: "3:15" }
        ],
    },
    {
        id: "quevedoAitanaMoratPlaylist",
        cover: "https://pbs.twimg.com/media/Gdgf3GoXgAAciAO.jpg",
        name: "Vibes of Spain",
        artists: ["Quevedo", "Aitana", "Morat"],
        color: colors.pink,
        tracks: [
            { title: "Quédate", duration: "3:24" },
            { title: "Punto de Partida", duration: "3:47" },
            { title: "No Termino", duration: "4:00" },
            { title: "De Cero", duration: "3:07" },
            { title: "Enamórate de Alguien Más", duration: "3:49" },
            { title: "Mi Pesadilla", duration: "3:25" },
            { title: "Date La Vuelta", duration: "3:17" },
            { title: "La Noche", duration: "3:38" },
            { title: "Primeras Veces", duration: "3:12" },
            { title: "Bajo la Mesa", duration: "2:37" }
        ],
    },
    {
        id: "badBunnyAnuelEladioPlaylist",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c42baef97a651b7badb256a0e",
        name: "Reggaeton Hits",
        artists: ["Bad Bunny", "Myke Towers", "Eladio Carrión"],
        color: colors.orange,
        tracks: [
            { title: "Vete", duration: "3:31" },
            { title: "Safaera", duration: "4:53" },
            { title: "Soy Peor", duration: "3:26" },
            { title: "Ella Quiere Beber", duration: "3:15" },
            { title: "Diles", duration: "3:21" },
            { title: "Me Porto Bonito", duration: "3:10" },
            { title: "Baila Baila Baila", duration: "4:02" },
            { title: "Ponle", duration: "3:00" },
            { title: "Bichiyal", duration: "3:17" },
            { title: "Adicto", duration: "3:43" }
        ],
    },
    {
        id: "feidMoraPlaylist",
        cover: "https://seed-mix-image.spotifycdn.com/v6/img/artist/0Q8NcsJwoCbZOHHW63su5S/es/default",
        name: "Latin Vibes",
        artists: ["Feid", "Mora"],
        color: colors.green,
        tracks: [
            { title: "Yandel 150", duration: "3:13" },
            { title: "La Inocente", duration: "3:36" },
            { title: "Quédate", duration: "3:24" },
            { title: "Mi Lugar", duration: "3:25" },
            { title: "Tú", duration: "3:02" },
            { title: "Te Fuiste", duration: "2:59" },
            { title: "Contigo", duration: "3:44" },
            { title: "No Te Vayas", duration: "3:14" },
            { title: "Otro Trago", duration: "3:12" },
            { title: "Dímelo", duration: "3:47" }
        ],
    },
    {
        id: "verano2024",
        cover: "https://i.scdn.co/image/ab67706f000000025d399e2a89de3b33fcbb3bc5",
        name: "Verano 2024",
        artists: ["Feid", "Mora"],
        color: colors.green,
        tracks: [
            { title: "Yandel 150", duration: "3:13" },
            { title: "La Inocente", duration: "3:36" },
            { title: "Quédate", duration: "3:24" },
            { title: "Mi Lugar", duration: "3:25" },
            { title: "Tú", duration: "3:02" },
            { title: "Te Fuiste", duration: "2:59" },
            { title: "Contigo", duration: "3:44" },
            { title: "No Te Vayas", duration: "3:14" },
            { title: "Otro Trago", duration: "3:12" },
            { title: "Dímelo", duration: "3:47" }
        ],
    }
];
