import { User } from '../interfaces/UserInfo.interface';
import { Address } from './address.model';
import { Role } from './role.model';
import { TokenModel } from './token.model';

// https://stackoverflow.com/questions/14142071/typescript-and-field-initializers
export class UserInfo implements User {
    _id: string; avatar?: string;
    email: string;
    firstName: string;
    homePhone?: string;
    lastName: string;
    username: string;
    refreshToken?: any;
    addresses?: Address[];
    roles?: Role[];
    facebook?: string;
    twitter?: string;
    instagram?: string;
    dateCreated?: Date;
    displayName = `@${this.username}`;
    token?: TokenModel;
    status?: string;

    constructor(init?: Partial<UserInfo>
    ) {
        if (init) {
            Object.assign(this, init);
        }
    }

    getIdToken() {
        return new Promise(resolve => {
            resolve(this.token);
        });
    }
}
