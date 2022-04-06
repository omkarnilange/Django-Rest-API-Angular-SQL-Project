import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: ViewBooksComponent},
  { path: 'products', component: ViewProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
