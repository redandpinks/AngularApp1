import { Component } from '@angular/core';
import { Order } from '../order.model';  

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order: Order;

  constructor() {
    this.order = new Order(new Cart());
    // Logic to retrieve the order details
  }

  completeOrder() {
    // Logic to complete the order
    console.log('Order completed:', this.order);
  }
}