export abstract class SeriesGateway {
    abstract getSeries(): Promise<any>;
    abstract getSerieById(id: number): Promise<any>;
}