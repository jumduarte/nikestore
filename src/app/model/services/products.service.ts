import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private products: Iproducts[] = [
  { id:1, name: 'All Star Chuck Taylor vinho', price: 250.0, description: 'The insole are confortable so you can', img: "./tenis1.png" },
  { id:2, name: 'All Star Chuck Taylor azul escuro', price: 250.0, description: 'The insole are confortable so you can', img: "./tenis2.png"  },
  { id:3, name: 'All Star Chuck Taylor roxo escuro', price: 280.0, description: 'The insole are confortable so you can', img: "./tenis3.png" },
];
getProducts(): Iproducts[]{
  return this.products;
}
}
