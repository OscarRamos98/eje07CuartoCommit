import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  constructor(private service: ProductService, private fb: FormBuilder) { }

  myForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      cost: ['', Validators.compose([Validators.required])],
      img: ['', Validators.compose([Validators.required])]
    });
  }

  saveProduct() {

    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newProduct({
        name: this.myForm.get('name').value,
        cost: this.myForm.get('cost').value,
        img: this.myForm.get('img').value,
        active : false
      });
    }
  }

}
