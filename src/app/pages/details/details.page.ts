import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  products: Product[];

  constructor( private actroute: ActivatedRoute, private router: Router, private productService: ProductService) {

    this.products = this.productService.getProduct();

  }

  ngOnInit() {
  }

}
