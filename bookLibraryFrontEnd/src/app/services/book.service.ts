import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
interface IBook {
  bookId: string;
  bookName: string;
  mrp: number;
  author: string;
  date:Date;
}
interface ICategory {
    categoryId: number;
    languageName: string
  }
@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:IBook[] | undefined;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    let tempVar = this.http.get<IBook[]>('http://127.0.0.1:8000/book/');
    return tempVar;
  }
  getBookCategories(): Observable<ICategory[]> {
    let tempVar = this.http.get<ICategory[]>('http://127.0.0.1:8000/category/');
    return tempVar;
  }
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  } 
}
