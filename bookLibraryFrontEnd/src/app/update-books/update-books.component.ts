import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-services/product.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {
  productId!: string;
  productName!: string;
  quantityAvailable!: number;
  quantity!: number;
  author!: string;
  price: any;
  form:any;

  constructor(private route: ActivatedRoute, private _productService:ProductService,private router: Router) { }

  updateBooks(productId:string,productName: string,author: string,price: any,quantity: number) {

   
    var bookObj:any;
    bookObj = { productId: productId,productName: productName, author: author, price: price, quantityAvailable: quantity };
   console.log(bookObj)
   this._productService.updateBooks(bookObj).subscribe(result=>{
    if(result.detail){
      alert(result.detail);
      this.router.navigate(['/login'])
    }
    
    else{
      
      console.log(result);
      alert('Success');
      this.router.navigate(['/products'])
    }
  })

    }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.productName = this.route.snapshot.params['productName'];
    this.author = this.route.snapshot.params['author'];
    this.price = this.route.snapshot.params['price'];
    this.quantityAvailable = parseInt(this.route.snapshot.params['quantityAvailable']);
  }

}
