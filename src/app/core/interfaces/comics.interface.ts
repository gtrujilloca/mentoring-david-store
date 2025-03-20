export interface ComicResponse {
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
    digitalId: number;
    title: string;
    variantDescription: string;
    description: null | string;
    modified: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: URL[];
    series: Series;
    variants: Series[];
    collectedIssues: Series[];
    dates: DateElement[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Characters;
}

export interface Characters {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
}

export interface Series {
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

export interface DateElement {
    type: string;
    date: string;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Price {
    type: string;
    price: number;
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

export interface TextObject {
    type: string;
    language: string;
    text: string;
}

export interface URL {
    type: string;
    url: string;
}
