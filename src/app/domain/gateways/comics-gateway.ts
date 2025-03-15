export abstract class ComicsGateway {
    abstract getComics(): Promise<any>;
    abstract getComicById(id: number): Promise<any>;
}