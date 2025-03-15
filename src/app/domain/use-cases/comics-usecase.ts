import { inject } from "@angular/core";
import { ComicsGateway } from "@/domain/gateways/comics-gateway";

export class ComicsUseCase {
    private _comicsGateway = inject(ComicsGateway);

    async getComics(): Promise<any> {
        return await this._comicsGateway.getComics();
    }

    async getComicById(id: number): Promise<any> {
        return await this._comicsGateway.getComicById(id);
    }
}