import { ComicResponse } from "@/core/interfaces/comics.interface";

export abstract class ComicsGateway {
    abstract getComics(): Promise<ComicResponse>;
    abstract getComicById(id: number): Promise<any>;
}