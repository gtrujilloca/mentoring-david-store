import { environment } from 'src/environments/environment';
const { api_url, timestamp, hash, api_key } = environment;

export enum MarvelResources {
    COMICS = 'comics',
    SERIES = 'series',
    CHARACTERS = 'characters'
}

export const marvelInfoParams = `ts=${timestamp}&apikey=${api_key}&hash=${hash}` as const;

export function generateMarvelInfoPath(resource: MarvelResources) {
    return `${api_url}/${resource}?${marvelInfoParams}`;
}

export function generateMarvelInfoByIdPath(resource: MarvelResources, id: string) {
    return `${api_url}/${resource}/${id}?${marvelInfoParams}`;
}