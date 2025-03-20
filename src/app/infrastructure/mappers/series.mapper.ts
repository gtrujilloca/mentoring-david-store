import { SerieResponseAPI } from "@/core/interfaces/series-api.interface";
import { SerieResponse } from "@/core/interfaces/series.interface";
import { HttpStatusCode } from "@angular/common/http";

export function seriesApiMapper(response: SerieResponseAPI): SerieResponse {
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

export function errorSeriesMapper(): SerieResponse {

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