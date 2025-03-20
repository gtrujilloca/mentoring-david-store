import { inject, Injectable } from '@angular/core';
import { generateMarvelInfoPath, MarvelResources, generateMarvelInfoByIdPath } from '@/infrastructure/paths';
import { HttpClient } from '@angular/common/http';
import { SeriesGateway } from '@/domain/gateways/series-gateway';
import { catchError, firstValueFrom, of, switchMap } from 'rxjs';
import { SerieResponseAPI } from '@/core/interfaces/series-api.interface';
import { seriesApiMapper, errorSeriesMapper } from '@/infrastructure/mappers/series.mapper';
import { SerieResponse } from '@/core/interfaces/series.interface';

@Injectable()

export class SeriesService extends SeriesGateway {
	private readonly _seriesPath = generateMarvelInfoPath(MarvelResources.SERIES);
	private readonly _httpClient = inject(HttpClient);

	async getSeries(): Promise<SerieResponse> {
		return firstValueFrom(
			this._httpClient.get<SerieResponseAPI>(this._seriesPath).pipe(
				switchMap(response => of(seriesApiMapper(response))),
				catchError(_ => of(errorSeriesMapper()))
			));
	}

	async getSerieById(id: number): Promise<SerieResponse> {
		const seriesPath = generateMarvelInfoByIdPath(MarvelResources.SERIES, id.toString());
		return firstValueFrom(
			this._httpClient.get<SerieResponseAPI>(seriesPath).pipe(
				switchMap(response => of(seriesApiMapper(response))),
				catchError(_ => of(errorSeriesMapper()))
			));
	}
}