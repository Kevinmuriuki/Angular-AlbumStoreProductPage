import { Component, OnInit } from '@angular/core';

import '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private _productService) { }

  ngOnInit() {
  }

}
