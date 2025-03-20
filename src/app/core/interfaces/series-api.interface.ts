export interface SerieResponseAPI {
    code: number;
    status: string;
    data: Data;
}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}

export interface Result {
    id: number;
    title: string;
    description: null | string;
    resourceURI: string;
    urls: URL[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: string;
    thumbnail: Thumbnail;
    creators: Creators;
    characters: Characters;
    stories: Stories;
    comics: Characters;
    events: Characters;
    next: Next | null;
    previous: null;
}

export interface Characters {
    available: number;
    collectionURI: string;
    items: Next[];
    returned: number;
}

export interface Next {
    resourceURI: string;
    name: string;
}

export interface Creators {
    available: number;
    collectionURI: string;
    items: CreatorsItem[];
    returned: number;
}

export interface CreatorsItem {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: StoriesItem[];
    returned: number;
}

export interface StoriesItem {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface URL {
    type: string;
    url: string;
}
