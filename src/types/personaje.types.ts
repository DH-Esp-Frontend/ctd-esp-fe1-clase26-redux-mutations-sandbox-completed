export interface PersonajesResult {
    results: IPersonaje[];
}

export interface IPersonaje {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    episode: string[];
}

export interface Favs {
    id: string;
    name: string;
}

export interface FavList {
    items: Favs[]
}

export default IPersonaje;