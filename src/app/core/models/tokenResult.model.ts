import { UserInfo } from './userInfo.model';
import { TokenModel } from './token.model';


export class TokenResult implements TokenModel {
    public access_token: string;
    public refresh_token: string;
    public expirationTime: string;
    public expires_in: string;
    public issuedAtTime: string;
    public signInProvider: string;
    public claims?: { [key: string]: any };
    public user?: UserInfo;
    public token_type?: string;
}
