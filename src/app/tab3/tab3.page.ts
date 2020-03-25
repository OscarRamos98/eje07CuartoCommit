import { Component } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  products: Product[];

  constructor(private producService: ProductService) {
    this.products = this.producService.getProduct();
  }

}
