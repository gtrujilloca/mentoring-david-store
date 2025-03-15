export abstract class AuthGateway {
    abstract signIn(email: string, password: string): Promise<void>;
    abstract signUp(email: string, password: string, nickname: string ): Promise<void>;
}