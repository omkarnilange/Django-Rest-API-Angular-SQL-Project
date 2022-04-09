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
import { RegisterComponent } from './register/register.component';
import { BookService } from './services/book.service';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { HomeComponent } from './home/home.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { ViewProductsCommonComponent } from './view-products-common/view-products-common.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    RegisterComponent,
    ViewProductsComponent,
    CommonLayoutComponent,
    HomeComponent,
    CustomerLayoutComponent,
    UpdateBooksComponent,
    AddBookComponent,
    LoginLayoutComponent,
    ViewProductsCommonComponent
  
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
