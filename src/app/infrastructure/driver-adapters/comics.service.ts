import { inject, Injectable } from '@angular/core';
import { generateMarvelInfoPath, MarvelResources, generateMarvelInfoByIdPath } from '@/infrastructure/paths';
import { HttpClient } from '@angular/common/http';
import { ComicsGateway } from '@/domain/gateways/comics-gateway';
import { catchError, firstValueFrom, of, switchMap } from 'rxjs';
import { ComicResponseAPI } from '@/core/interfaces/comics-api.interface';
import { comicApiMapper, errorComicMapper } from '@/infrastructure/mappers/comics.mapper';
import { ComicResponse } from '@/core/interfaces/comics.interface';

@Injectable()

export class ComicsService extends ComicsGateway {

  private readonly _comicsPath = generateMarvelInfoPath(MarvelResources.COMICS);
  private readonly _httpClient = inject(HttpClient);

  async getComics(): Promise<ComicResponse> {
    return firstValueFrom(
      this._httpClient.get<ComicResponseAPI>(this._comicsPath).pipe(
        switchMap(response => of(comicApiMapper(response))),
        catchError(_ => of(errorComicMapper()))
      ));
  }

  async getComicById(id: number): Promise<ComicResponse> {
    const comicPath = generateMarvelInfoByIdPath(MarvelResources.COMICS, id.toString());
    return firstValueFrom(
      this._httpClient.get<ComicResponseAPI>(comicPath).pipe(
        switchMap(response => of(comicApiMapper(response))),
        catchError(_ => of(errorComicMapper()))
      ));
  }
}