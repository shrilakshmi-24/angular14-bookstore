import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Book } from '../../types/book.type';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:Book={ } as Book
  @Output() emitBook =new EventEmitter<Book>()
  
  isInCart:boolean= false
  

  constructor(private cartService:CartService){}

  addToCart(){
    this.isInCart=true
    this.cartService.add(this.book)

  }

  removeFromCart(){
    this.isInCart=false
    this.cartService.remove(this.book)
  }

}
