import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface IProduct {
    productId: string;
    productName: string;
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
  }