import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Training[] | undefined;
  total : number | undefined;
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotalSum();
  }

  onDeleteFromCart(training:Training){
    this.cartService.deleteFromCart(training);
    this.router.navigateByUrl('trainings');
  }

  onOrder(){
    this.cartService.order();
    this.router.navigateByUrl('trainings');
  }
}
