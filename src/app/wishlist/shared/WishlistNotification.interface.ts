export interface WishlistNotificationKey {
    auth: string;
    p256dh: string;
}

export interface WishlistNotification {
    _id: string;
    wishtlistId: string;
    expirationTime: string;
    keys: WishlistNotificationKey;
    dateCreated?: Date;
    dateModifed?: Date;
}
