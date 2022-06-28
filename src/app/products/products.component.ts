import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  key : string = "shoppingCart";

  cart: Array<any> = [];

  products:Array<any>= [
    {
      url : "../../assets/img/platillo1.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 1",
      price: 5
    },
    {
      url : "../../assets/img/platillo2.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 2",
      price: 5
    },
    {
      url : "../../assets/img/platillo3.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 3",
      price: 5
    },
    {
      url : "../../assets/img/platillo4.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 4",
      price: 5
    },
    {
      url : "../../assets/img/platillo5.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 5",
      price: 5
    },
    {
      url : "../../assets/img/platillo1.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 6",
      price: 5
    },
    {
      url : "../../assets/img/platillo2.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 7",
      price: 5
    },
    {
      url : "../../assets/img/platillo3.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Card title 8",
      price: 5
    },
  ]

  constructor() { }

  ngOnInit(): void { }

  saveOnCart( index : number ) : void {
    let product = this.products[index];
    product.amount = 1;

    this.cart.push(product);
    let data: string = JSON.stringify(this.cart);
    localStorage.setItem(this.key, data);
  }

  loadFromCart ( ) : any {
    let data : any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

}
