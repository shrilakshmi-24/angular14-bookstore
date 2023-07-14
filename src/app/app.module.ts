import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from './books/books.component';
import { FormsModule } from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingmodule } from "./app-routing.module";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from "./auth/auth.module";

@NgModule(
   {
     declarations:[AppComponent, CartComponent, LoginComponent, RegisterComponent],
     imports:[BrowserModule,FormsModule, BooksModule,AppRoutingmodule,AuthModule],
    //  providers:[BooksService],
     bootstrap:[AppComponent]
    }
)
export class AppModule{}