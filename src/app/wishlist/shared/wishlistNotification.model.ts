import { WishlistNotification, WishlistNotificationKey } from './WishlistNotification.interface';

export class WishlistNotificationModel implements WishlistNotification {
    wishtlistId: string;
    _id: string;
    expirationTime: string;
    keys: WishlistNotificationKey;
    dateCreated?: Date;
    dateModifed?: Date;

    constructor(wishlistId: string) {
        this.wishtlistId = wishlistId;
    }
}
