import { inject, Injectable } from '@angular/core';
import { generateMarvelInfoPath, MarvelResources, generateMarvelInfoByIdPath } from '@/infrastructure/paths';
import { HttpClient } from '@angular/common/http';
import { CharactersGateway } from '@/domain/gateways/characters-gateway';
import { catchError, firstValueFrom, of, switchMap } from 'rxjs';
import { CharacterResponseAPI } from '@/core/interfaces/character-api.interface';
import { characterApiMapper, errorCharacterMapper } from '@/infrastructure/mappers/characters.mapper';
import { CharacterResponse } from '@/core/interfaces/character.interface';

@Injectable()

export class CharactersService extends CharactersGateway {
  private readonly _charactersPath = generateMarvelInfoPath(MarvelResources.CHARACTERS);
  private readonly _httpClient = inject(HttpClient);

  async getCharacters(): Promise<CharacterResponse> {
    return firstValueFrom(
      this._httpClient.get<CharacterResponseAPI>(this._charactersPath).pipe(
        switchMap(response => of(characterApiMapper(response))),
        catchError(_ => of(errorCharacterMapper()))
      ));
  }

  async getCharacterById(id: number): Promise<CharacterResponse> {
    const characterPath = generateMarvelInfoByIdPath(MarvelResources.CHARACTERS, id.toString());
    return firstValueFrom(
      this._httpClient.get<CharacterResponseAPI>(characterPath).pipe(
        switchMap(response => of(characterApiMapper(response))),
        catchError(_ => of(errorCharacterMapper()))
      ));
  }
}
