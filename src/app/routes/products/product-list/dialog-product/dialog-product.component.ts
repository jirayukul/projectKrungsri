import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-product-list-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css'],
})
export class ProductsProductListDialogProductComponent implements OnInit {

  urlPokemon = '';

  subScriptionData?: Subscription;

  dataPokemon :any;

  constructor(
    public dialogRef: MatDialogRef<ProductsProductListDialogProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.urlPokemon = this.data.url;
    this.getDataPokemon();
  }


  getDataPokemon() {
    this.subScriptionData = this.http.get(this.urlPokemon).subscribe({
      next: response => {
        this.dataPokemon = response;
      },
      error: error => {},
      complete: () => {
        this.subScriptionData?.unsubscribe();
      },
    });
  }
}
