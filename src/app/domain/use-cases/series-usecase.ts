import { inject } from "@angular/core";
import { SeriesGateway } from "@/domain/gateways/series-gateway";

export class SeriesUseCase {
    private _seriesGateway = inject(SeriesGateway);

    async getSeries(): Promise<any> {
        return await this._seriesGateway.getSeries();
    }

    async getSerieById(id: number): Promise<any> {
        return await this._seriesGateway.getSerieById(id);
    }
}