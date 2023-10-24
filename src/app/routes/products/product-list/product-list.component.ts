import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductsProductListDialogProductComponent } from './dialog-product/dialog-product.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductsProductListComponent implements OnInit {
  urlPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  subScriptionData?: Subscription;

  pokemonData: any;
  displayData: any;
  dataPaginators: any;

  datalength: any;
  formGroup: FormGroup;
  pageEvent?: PageEvent;
  pageSize = 3;
  pageSizeOptions: number[] = [3, 9, 30, 100];
  eventPage = 3;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      pokemonData: [''],
    });
  }

  ngOnInit() {
    this.getDataPokemon();
    this.formGroup.get('pokemonData')?.valueChanges.subscribe(value => {

      const lowerData = value.toLowerCase();
      const data = this.pokemonData.results.filter((option: any) =>
        option.name.toLowerCase().includes(lowerData)
      );

      this.getDataDisplay(data);
    });
  }

  getDataPokemon() {
    this.subScriptionData = this.http.get(this.urlPokemon).subscribe({
      next: response => {
        this.pokemonData = response;
        this.datalength = this.pokemonData.results.length;

        this.getDataDisplay(this.pokemonData.results);
      },
      error: error => {
        this.router.navigate(['/404']);
      },
      complete: () => {
        this.subScriptionData?.unsubscribe();
      },
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  paginatorEvent(event: any) {
    const startIndex = event?.pageIndex * event?.pageSize;
    const endIndex = startIndex + event?.pageSize;
    this.eventPage = event?.pageSize;
    this.displayData = this.pokemonData.results.slice(startIndex, endIndex);
  }

  getDataDisplay(pokemonData: any) {
    const startIndex = 0 * this.eventPage;
    const endIndex = startIndex + this.eventPage;
    this.displayData = pokemonData.slice(startIndex, endIndex);

    console.log(this.displayData);
  }

  openDialog(event : any): void {
    const dialogRef = this.dialog.open(ProductsProductListDialogProductComponent, {
      width: 'auto',
      height :'auto',
      data: event,
    });
    // console.log(event);
  }
}
