import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { WishlistPage } from './wishlist.page';

@NgModule({
  declarations: [WishlistPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: WishlistPage
      }
    ])
  ]
})
export class WishlistPageModule { }
