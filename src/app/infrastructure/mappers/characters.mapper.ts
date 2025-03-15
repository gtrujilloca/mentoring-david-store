import { CharacterResponseAPI } from "@/core/interfaces/character-api.interface";
import { CharacterResponse } from "@/core/interfaces/character.interface";
import { HttpStatusCode } from "@angular/common/http";

export function characterApiMapper(response: CharacterResponseAPI): CharacterResponse {
    const {
        code,
        status,
        data
    } = response

    return {
        code,
        status,
        data
    }
}

export function errorCharacterMapper(): CharacterResponse {
    return {
        code : HttpStatusCode.InternalServerError,
        status : 'Error in the request',
        data : {
            offset : 0,
            limit : 0,
            total : 0,
            count : 0,
            results : []
        }
    }
}