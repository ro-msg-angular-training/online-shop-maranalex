import { Component, OnInit } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-product-single-details',
  templateUrl: './product-single-details.component.html',
  styleUrls: ['./product-single-details.component.css']
})
export class ProductSingleDetailsComponent implements OnInit {

   products = products;

  constructor() { }

  ngOnInit() {
  }

}
