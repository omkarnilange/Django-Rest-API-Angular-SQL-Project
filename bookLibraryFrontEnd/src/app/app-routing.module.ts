import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/authguard-services/auth-guard.service';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewProductsCommonComponent } from './view-products-common/view-products-common.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: ViewProductsCommonComponent},
  { path: 'products', component: ViewProductsComponent,canActivate: [AuthGuardService]},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuardService]},
  { path: '', component:LoginComponent },
  { path: 'addBook', component: AddBookComponent,canActivate: [AuthGuardService]},
  { path: 'updateCart/:productId/:productName/:author/:price/:quantityAvailable', component: UpdateBooksComponent,canActivate: [AuthGuardService] },
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
