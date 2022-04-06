import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AdminpComponent } from './adminp/adminp.component';
import { RegisterComponent } from './register/register.component';
import { BookService } from './services/book.service';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    AdminpComponent,
    RegisterComponent,
    ViewProductsComponent,
    CommonLayoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
