import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleDetailsComponent } from './product-single-details.component';

describe('ProductSingleDetailsComponent', () => {
  let component: ProductSingleDetailsComponent;
  let fixture: ComponentFixture<ProductSingleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSingleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
