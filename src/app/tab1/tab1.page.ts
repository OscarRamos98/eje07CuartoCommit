import { Component } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Router, NavigationExtras} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  products: Product[] = [];
  search: string;

  constructor(private productService: ProductService, private router: Router, private alert: AlertController) {
    this.clearSerch();
  }

  view(products: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(products)
      }
    };
    this.router.navigate(['/details'], extras);
  }

  operation(pos: number,ev: {detail: {side}}) {
    const side = ev.detail.side;

    if(side === 'start'){
    this.productService.changeStatus(pos);
    } else {
      this.showAlert(pos);
    }
  }

  async showAlert(pos: number){
    const al = await this.alert.create(
      {
        header: 'Confirmar',
        message: '¿Seguro que desea eliminar?',
        buttons: [{
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Si',
          handler: () => {
            this.productService.deleteProduct(pos);
          }
        }]
      }
    );
    await al.present();
  }

  newProduct(): void {
    this.router.navigate(['/new-product']);
  }

  clearSerch(): void {
    this.products = this.productService.getProduct();
  }

  filter(): void {
    this.clearSerch();

    if (this.search && this.search.trim) {
      this.products = this.products.filter( (product) => {
        return(product.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }

}
