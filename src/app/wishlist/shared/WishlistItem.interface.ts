export interface WishlistItem {
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
}