import { inject } from "@angular/core";
import { AuthGateway } from "@/domain/gateways/auth-gateway";

export class AuthUseCase {
    private _authGateway = inject(AuthGateway);

    async signIn(email: string, password: string): Promise<void> {
        await this._authGateway.signIn(email, password);
    }

    async signUp(email: string, password: string, nickname: string): Promise<void> {
        await this._authGateway.signUp(email, password, nickname);
    }
}