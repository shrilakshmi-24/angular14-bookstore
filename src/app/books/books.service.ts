import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [{
      name:'code',
      author:"david harry",
      src: "https://m.media-amazon.com/images/I/41L2wQmAi8L.jpg",
      price:700
      },
      {
        name:'python',
        author:"Philip Robbins",
        src:"https://m.media-amazon.com/images/I/71UJ3kftzFL._SY466_.jpg",
        price:500
       
      },
      {
        name:'clean code',
        author:"Robert C. Martin",
        src:"https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
        price:1500
       
      }]
    
  }
}
