import { inject } from "@angular/core";
import { CharactersGateway } from "@/domain/gateways/characters-gateway";
import { CharacterResponse } from "@/core/interfaces/character.interface";

export class CharactersUseCase {
    private _charactersGateway = inject(CharactersGateway);

    async getCharacters(): Promise<CharacterResponse> {
        return await this._charactersGateway.getCharacters();
    }

    async getCharacterById(id: number): Promise<any> {
        return await this._charactersGateway.getCharacterById(id);
    }
}