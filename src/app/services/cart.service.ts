import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Training[] = [];
  customer : Customer | undefined;
  idCart = 'cart';

  constructor() { }

  getCart(): Training[] | undefined {
    this.cart = JSON.parse( localStorage.getItem(this.idCart) || '' );
    return this.cart;
  }
  addTraining(training: Training) {
    if(training.quantity>=1){

      let added = false;
      for (let i = 0; i<this.cart.length ; i++){
        if(this.cart[i].id == training.id){
          this.cart[i].quantity += training.quantity;
          added = true;
        }
      }
      if (!added){
        this.cart.push(training);
      }

      localStorage.setItem(this.idCart, JSON.stringify(this.cart));
    }
    
  }

  deleteFromCart(training : Training){
    let newCart : Training[] = [];
    for (let i = 0; i<this.cart.length ; i++){
      if(!(this.cart[i].id == training.id)){
        newCart.push(this.cart[i]);
      }
    }
    this.cart = newCart;
    localStorage.setItem(this.idCart, JSON.stringify(this.cart));
  }

  getTotalSum(){
    let totalSum = 0;
    if(this.cart.length != 0){
      for (let i = 0; i < this.cart.length; i++){
        totalSum += this.cart[i].price*this.cart[i].quantity;
      }
    }
    return totalSum;
  }

  order(){
    let newCart : Training[] = [];
    this.cart = newCart;
    localStorage.setItem(this.idCart, JSON.stringify(this.cart));
  }

  getCustomer() : Customer | undefined{
    return this.customer;
  }
}
