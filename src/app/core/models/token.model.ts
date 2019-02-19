export class TokenModel {
    public access_token: string;
    public refresh_token: string;
    public expirationTime: string;
    public expires_in: string;
    public issuedAtTime: string;
    public signInProvider: string;
    public claims?: { [key: string]: any };
    public token_type?: string;
    public forceRefresh?: boolean;
}
