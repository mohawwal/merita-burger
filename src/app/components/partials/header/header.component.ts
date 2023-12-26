import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartServices/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity =0;
  constructor(private cartServices: CartService) {
    this.cartServices.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount
    })
  }
  ngOnInit(): void {
     
  }
}
