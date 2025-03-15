export interface CharacterResponseAPI {
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
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    series: Series;
}

export interface Series {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
}

export interface SeriesItem {
    resourceURI: string;
    name: string;
}


export interface Thumbnail {
    path: string;
    extension: string;
}

