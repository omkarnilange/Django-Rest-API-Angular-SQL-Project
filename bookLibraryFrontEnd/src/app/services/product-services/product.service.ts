import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface IProduct {
    productId: string;
    productName: string;
    author: string;
    price: number;
    quantityAvailable: number;
    categoryId: number;
  }
  
export interface ICategory {
    categoryId: number;
    categoryName: string
  }
  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    products!: IProduct[];
    categories!: ICategory[];
    constructor(private http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
      let tempVar = this.http.get<IProduct[]>('http://127.0.0.1:8000/product/');
      return tempVar;
    }
    getProductCategories(): Observable<ICategory[]> {
      let tempVar = this.http.get<ICategory[]>('http://127.0.0.1:8000/category/');
      return tempVar;
    }

    updateBooks(data: any):Observable<any>{
      console.log('this is in update method,service')
      return this.http.put(`http://127.0.0.1:8000/detail/${data.productId}`, data)
    
    }
    deleteBook(data: any):Observable<any>{
      console.log('this is in delete method,service')
      return this.http.delete(`http://127.0.0.1:8000/detail/${data.productId}`)
    
    }

    addBook(data: any):Observable<any>{
      console.log('this is in addBook method,service')
      return this.http.post('http://127.0.0.1:8000/product/',data)
    
    }
  }