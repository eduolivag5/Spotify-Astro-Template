import { colors } from "./colors";

export interface Track {
    title: string;
    duration: string;
}
  
export interface Album {
    id: string
    cover: string
    name: string
    artist: string
    releaseYear: number
    color: typeof colors[keyof typeof colors]
    tracks: Track[]
}
  
export const albumsData: Album[] = [
    {
        id: "3V2ApPxUSquOkjLQU3wmjh",
        cover: "https://i.scdn.co/image/ab67616d0000b2734b690afba75a356fcdad526e",
        name: "Buenas noches",
        artist: "Quevedo",
        releaseYear: 2022,
        color: colors.indigo,
        tracks: [
            { title: "KASSANDRA", duration: "3:03" },
            { title: "DURO", duration: "2:42" },
            { title: "IGUALES", duration: "3:03" },
            { title: "GRAN VÍA", duration: "3:33" },
            { title: "CHAPIADORA.COM", duration: "3:17" },
            { title: "POR ATRÁS", duration: "2:51" },
            { title: "14 FEBREROS", duration: "2:52" },
            { title: "LA 125", duration: "3:14" },
            { title: "HALO", duration: "3:01" },
            { title: "MR. MOONDIAL", duration: "2:45" },
            { title: "QUE ASCO DE TODO", duration: "3:10" },
            { title: "NOEMÚ", duration: "3:26" },
            { title: "SHIBATTO", duration: "2:18" },
            { title: "LOS DÍAS CONTADOS", duration: "2:41" },
            { title: "EL ESTRIBILLO", duration: "2:41" },
            { title: "AMANECIÓ", duration: "4:15" },
            { title: "TE FALLÉ", duration: "3:39" },
            { title: "BUENAS NOCHES", duration: "3:58" },
        ],
    },
    {
        id: "4FftCsAcXXD1nFO9RFUNFO",
        cover: "https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec",
        name: "Nadie sabe lo que va a pasar mañana",
        artist: "Bad Bunny",
        releaseYear: 2023,
        color: colors.pink,
        tracks: [
            { title: "NADIE SABE", duration: "6:19" },
            { title: "MÓNACO", duration: "4:27" },
            { title: "FINA", duration: "3:36" },
            { title: "HIBIKI", duration: "3:28" },
            { title: "MR. OCTOBER", duration: "3:09" },
            { title: "CYBERTRUCK", duration: "3:11" },
            { title: "VOU 787", duration: "2:03" },
            { title: "SEDA", duration: "3:10" },
            { title: "GRACIAS POR NADA", duration: "2:56" },
            { title: "TELEFONO NUEVO", duration: "5:54" },
            { title: "BABY NUEVA", duration: "4:00" },
            { title: "MERCEDES CAROTA", duration: "3:22" },
            { title: "LOS PITS", duration: "4:10" },
            { title: "VUELVE CANDY B", duration: "4:26" },
            { title: "BATICANO", duration: "4:16" },
            { title: "NO ME QUIERO CASAR", duration: "3:45" },
            { title: "WHERE SHE GOES", duration: "3:51" },
            { title: "THUNDER Y LIGHTNING", duration: "3:37" },
            { title: "PERRO NEGRO", duration: "2:42" },
            { title: "EUROPA :(", duration: "0:11" },
            { title: "ACHO PR", duration: "5:59" },
            { title: "UN PREVIEW", duration: "2:45" }
        ],
    },
    {
        id: "0lgs2Sa82lyX89nBUWyUy6",
        cover: "https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242",
        name: "Ferxxocalipsis",
        artist: "Feid",
        releaseYear: 2023,
        color: colors.green,
        tracks: [
            { title: "ALAKRAN", duration: "1:30" },
            { title: "50 PALOS", duration: "2:47" },
            { title: "LA VUELTA", duration: "2:01" },
            { title: "CUAL ES ESA", duration: "2:52" },
            { title: "INTERLUDE", duration: "1:43" },
            { title: "LUNA", duration: "3:16" },
            { title: "ESQUIRLA", duration: "2:27" },
            { title: "DESQUITE", duration: "2:13" },
            { title: "YO AK", duration: "3:25" },
            { title: "CLASSY 101", duration: "3:15" }
        ],
    },
    {
        id: "01R2vYq9iDhn4ZXtM5dd7i",
        cover: "https://i.scdn.co/image/ab67616d0000b27302bf1057986d3d64dec7e66a",
        name: "¿A Dónde Vamos?",
        artist: "Morat",
        releaseYear: 2021,
        color: colors.gray,
        tracks: [
            { title: "A Dónde Vamos?", duration: "3:24" },
            { title: "No Termino", duration: "4:00" },
            { title: "En Coma", duration: "3:23" },
            { title: "Al Aire", duration: "2:49" },
            { title: "De Cero", duration: "3:07" },
            { title: "Primeras Veces", duration: "3:12" },
            { title: "No Hay Más Que Hablar", duration: "3:31" },
            { title: "Enamórate De Alguien Más", duration: "3:49" },
            { title: "Date La Vuelta", duration: "3:17" },
            { title: "Idiota", duration: "3:03" },
            { title: "Bajo La Mesa", duration: "2:37" },
            { title: "Nunca Te Olvidé", duration: "3:32" },
            { title: "Mi Pesadilla", duration: "3:25" },
            { title: "Simplemente Pasan", duration: "3:01" },
            
        ],
    },
    {
        id: "6NmYJszy5BaEm1WF4tJL7Z",
        cover: "https://i.scdn.co/image/ab67616d0000b273f5efed2f29ab39ebab066e2a",
        name: "LA PANTERA NEGRA",
        artist: "Myke Towers",
        releaseYear: 2024,
        color: colors.orange,
        tracks: [
            { title: "COMPETENCIA", duration: "3:10" },
            { title: "OTRA OPORTUNIDAD", duration: "2:49" },
            { title: "AUNQUE LLEGUE OTRO", duration: "3:17" },
            { title: "MEJOR ASI", duration: "3:39" },
            { title: "TAMBIÉN", duration: "2:19" },
            { title: "FRÍO", duration: "2:40" },
            { title: "CACHÉ", duration: "3:16" },
            { title: "SEXO DESENFRENADO", duration: "4:03" },
            { title: "LA PRIMERA VEZ", duration: "2:51" },
            { title: "PODER ADQUISITIVO", duration: "3:01" },
            { title: "VENENOSA", duration: "2:52" },
            { title: "OTRA NOCHE", duration: "3:44" },
            { title: "SE TE NOTA", duration: "3:10" },
            { title: "HASTA LA VISTA", duration: "2:54" },
            { title: "DINERO y FAMA", duration: "3:35" },
            { title: "EN EL MAR", duration: "4:06" },
            { title: "VAMO A DARLE", duration: "2:56" },
            { title: "DIABLITA", duration: "3:05" },
            { title: "ADIVINO", duration: "4:38" },
            { title: "HASTA LUEGO", duration: "3:02" }
        ],
    },
    {
        id: "5U2vQHhRZEq6J6gzHTdfbO",
        cover: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
        name: "Un verano sin ti",
        artist: "Bad Bunny",
        releaseYear: 2022,
        color: colors.yellow,
        tracks: [
            { title: "EL MUNDO ES MIO", duration: "3:52" },
            { title: "YA ME FUI", duration: "3:15" },
            { title: "VEN ENSEÑAME", duration: "3:46" },
            { title: "LO QUE PASO PASO", duration: "4:10" },
            { title: "BANG BANG", duration: "3:13" },
            { title: "SOBREDOSIS", duration: "4:30" },
            { title: "TENGO", duration: "2:51" },
            { title: "YA NO TE VEO", duration: "3:22" },
            { title: "NO VUELVAS", duration: "4:01" },
            { title: "UN PELO", duration: "3:27" },
            { title: "ME DEJASTE", duration: "2:49" },
            { title: "EL PUEBLO", duration: "3:56" },
            { title: "AL PRINCIPIO", duration: "4:08" },
            { title: "DESPUES DE ESTA", duration: "3:45" },
            { title: "CONQUISTANDO", duration: "4:22" },
            { title: "CERO", duration: "3:59" },
            { title: "SIGO", duration: "3:33" },
            { title: "TE LO DIJE", duration: "4:04" },
            { title: "LIBERACION", duration: "5:01" }
        ],
    },
];
  