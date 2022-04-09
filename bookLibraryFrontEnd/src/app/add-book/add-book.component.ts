import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-services/product.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private _productService:ProductService,private router: Router) { }
  addBookForm(form: NgForm) {
  console.log(form.value);
  var bookObj:any;
  bookObj = { productName: form.value.bookTitle, author: form.value.bookAuthor, price: form.value.bookPrice, quantityAvailable: form.value.bookQuant,categoryId: form.value.bookLang };
  console.log(bookObj);
  this._productService.addBook(bookObj).subscribe(result=>{
    if(result.detail){
      alert('Fail');
      this.router.navigate(['/login'])
      }
    
    else{
      
      console.log(result);
      alert('Success');
      this.router.navigate(['/products'])
    }
  })
  }

  ngOnInit(){
  }

}
