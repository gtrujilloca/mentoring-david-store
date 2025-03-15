import { CharacterResponse } from "@/core/interfaces/character.interface";

export abstract class CharactersGateway {
    abstract getCharacters(): Promise<CharacterResponse>;
    abstract getCharacterById(id: number): Promise<any>;
}