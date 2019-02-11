import { WishlistItem } from './WishlistItem.interface';
export class WishlistItemModel implements WishlistItem {
    _id?: string;
    wishlistId: string;
    name?: string;
    categoryId?: string;
    price?: number;
    url?: string;
    notes?: string;
    purchased?: boolean;
    statusId?: string;
    sortOrder?: number;
    dateCreated?: Date;
    dateModifed?: Date;

    constructor(wishlistId: string) {
        this.wishlistId = wishlistId;
    }

}
