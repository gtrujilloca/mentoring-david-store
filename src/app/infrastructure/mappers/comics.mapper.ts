import { ComicResponseAPI } from "@/core/interfaces/comics-api.interface";
import { ComicResponse } from "@/core/interfaces/comics.interface";
import { HttpStatusCode } from "@angular/common/http";

export function comicApiMapper(response: ComicResponseAPI): ComicResponse {
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

export function errorComicMapper(): ComicResponse {
    return {
        code: HttpStatusCode.InternalServerError,
        status: 'Error in the request',
        data: {
            offset: 0,
            limit: 0,
            total: 0,
            count: 0,
            results: []
        }
    }
}