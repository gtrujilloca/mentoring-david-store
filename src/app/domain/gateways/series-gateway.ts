import { SerieResponse } from "@/core/interfaces/series.interface";

export abstract class SeriesGateway {
    abstract getSeries(): Promise<SerieResponse>;
    abstract getSerieById(id: number): Promise<any>;
}