import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product [] = [];

  constructor() {
    this.products.push({
      name: 'Manzana',
      cost: '25',
      active: true,
      img: 'https://image.flaticon.com/icons/svg/415/415733.svg'
    });

    this.products.push({
      name: 'Agua',
      cost: '20',
      active: false,
      img: 'https://image.flaticon.com/icons/svg/2101/2101331.svg'
    });

    this.products.push({
      name: 'Pan',
      cost: '40',
      active: true,
      img: 'https://image.flaticon.com/icons/svg/135/135634.svg'
    });

  }

    getProduct(): Product[]{
      return this.products;
    }

    changeStatus(position: number){
      this.products[position].active = !this.products[position].active;
    }

    newProduct(product: Product): void {
      this.products.push(product);
    }

    deleteProduct(position: number): void {
      this.products.splice(position, 1);
    }

}
