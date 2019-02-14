import { AuthHttpService } from './../../core/services/auth-http.service';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { WishlistModel } from './Wishlist.model';
import { WishlistItemModel } from './WishlistItem.model';


@Injectable()
export class WishlistService {

    private _url: string = environment.apiUrl + 'user/';

    constructor(private _authHttp: AuthHttpService) {
    }

    all(): Observable<WishlistModel[]> {
        return (
            this._authHttp
                .get(this._url)
                .pipe(map((wishlists: any) => wishlists),
                    // .do(
                    //   data => console.log('All: ' + JSON.stringify(data))
                    // )
                    catchError(this.handleError))
        );
    }

    allDetails(): Observable<WishlistModel[]> {
        return (
            this._authHttp
                .get(`${this._url}details`)
                .pipe(map((wishlists: any) => wishlists),
                    // .do(
                    //   data => console.log('All: ' + JSON.stringify(data))
                    // )
                    catchError(this.handleError))
        );
    }

    delete(id: any): Observable<any> {
        return this._authHttp
            .delete(this._url + id)
            .pipe(map((result: any) => result),
                catchError(this.handleError));
    }

    details(wishlistId: any): Observable<WishlistModel> {
        return this._authHttp
            .get(`${this._url}${wishlistId}/details`)
            .pipe(map((wishlist: any) => wishlist),
                catchError(this.handleError));
    }

    get(id: string): Observable<WishlistModel> {
        return this._authHttp
            .get(this._url + id)
            .pipe(map((wishlist: any) => wishlist),
                catchError(this.handleError));
    }

    insert(userModel: WishlistModel): Observable<WishlistModel> {
        return this._authHttp
            .post(this._url, JSON.stringify(userModel))
            .pipe(map((wishlist: any) => wishlist),
                catchError(this.handleError));
    }

    items(wishlistId: string): Observable<WishlistItemModel[]> {

        return this._authHttp
            .get(`${this._url}${wishlistId}/items`)
            .pipe(map((wishlistItems: any) => wishlistItems),
                catchError(this.handleError));
    }

    update(wishlistModel: WishlistModel): Observable<WishlistModel> {
        return this._authHttp
            .put(this._url + wishlistModel._id, JSON.stringify(wishlistModel))
            .pipe(map((wishlist: any) => wishlist),
                catchError(this.handleError));
    }

    /*///////////////////////////////////////////////
    /* Private Methods
    //////////////////////////////////////////////*/

    /**
     * Handles the error
     * @param error : Error
     */
    private handleError(error: any) {

        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return throwError(errMessage);
        }
        return throwError(error || 'Node.js server error');
    }
}
