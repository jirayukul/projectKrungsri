import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsProductListDialogProductComponent } from './dialog-product.component';

describe('ProductsProductListDialogProductComponent', () => {
  let component: ProductsProductListDialogProductComponent;
  let fixture: ComponentFixture<ProductsProductListDialogProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsProductListDialogProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsProductListDialogProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
