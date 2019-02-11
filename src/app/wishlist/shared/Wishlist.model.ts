import { WishlistItem } from './WishlistItem.interface';
import { Wishlist, Preference } from './Wishlist.interface';

export class WishlistModel implements Wishlist {
    _id?: string;
    name: string;
    userId: string;
    preferences?: Preference;
    statusId?: string;
    privacy?: string;
    items?: WishlistItem[];
    dateExpire?: Date;
    dateCreated?: Date;
    dateModifed?: Date;

    constructor(userId: string) {
        this.userId = userId;
    }
}
