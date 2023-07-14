import { Component,OnInit } from '@angular/core';
import { Book } from '../types/book.type';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})



export class BooksComponent implements OnInit {
  books:Book[]=[]

  private booksService:BooksService;
  constructor() {
    this.booksService=new BooksService()
  }

  cart: Book[] = [];
  isShowing: boolean = true;

  ngOnInit() {
    this.books=this.booksService.getBooks()
  }

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

}
