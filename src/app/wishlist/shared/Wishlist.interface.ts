import { WishlistItem } from './WishlistItem.interface';


export interface Preference {
    includePriceWhenSharing?: boolean;
    markPurchaseItem?: boolean;
    hideFromeMe?: boolean;
    currencyUnitSymbol?: string;
    notifyOnAddItem?: boolean;
    notifyOnRemoveItem?: boolean;
    notifyOnClose?: boolean;
}

export interface Wishlist {
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
}
