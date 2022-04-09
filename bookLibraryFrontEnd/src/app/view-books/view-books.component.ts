import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
export interface ICategory {
    categoryId: number;
    languageName: string
  }
@Component({
    selector: 'app-view-books',
    templateUrl: './view-books.component.html',
    styleUrls: ['./view-books.component.css']
})

  
export class ViewBooksComponent implements OnInit {
    books: any[] | undefined;
    filteredBooks: any[] = [];
    categories: ICategory[] | undefined;
    showMsgDiv: boolean = false;
    searchByCategoryId: string = "0";
  searchByBookName: any;
  errMsg: any;
    constructor(private _bookService: BookService) {}
    ngOnInit() {
    this.getBooks();
    this.filteredBooks = this.books!;

    this.categories = [
      { "categoryId": 1, "languageName": "Marathi" },
      { "categoryId": 2, "languageName": "Hindi" },
      { "categoryId": 3, "languageName": "English" }
    ]

    if (this.books == null) {
        this.showMsgDiv = true;
      } 
    this.filteredBooks = this.books!;
    }

    getBooks() {
    this._bookService.getBooks().subscribe(
      responseProductData => {
        this.books = responseProductData;
        console.log(this.books);
        this.showMsgDiv = false;
      },
      responseProductError => {
        this.books = null!;
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      }
    );
  }

  getBookCategories() {
    this._bookService.getBookCategories().subscribe(
      responseCategoryData => this.categories = responseCategoryData
    );
  }

  searchBook(bookName: string) {
    if (this.searchByCategoryId == "0") {
      this.filteredBooks = this.books!;
    }
    else {
      this.filteredBooks = this.books!.filter(prod => prod.categoryId.toString() == this.searchByCategoryId);
    }
    if (bookName != null || bookName == "") {
      this.searchByBookName = bookName;
      this.filteredBooks = this.filteredBooks.filter(prod => prod.title.toLowerCase().indexOf(bookName.toLowerCase()) >= 0);
    }
    if (this.filteredBooks.length == 0) {
      this.showMsgDiv = true;
    }
    else {
      this.showMsgDiv = false;
    }
  }

  searchBookByCategory(categoryId: string) {
    if (this.searchByBookName != null || this.searchByBookName == "") {
      this.filteredBooks = this.books!.filter(prod => prod.productName.toLowerCase().indexOf(this.searchByBookName.toLowerCase()) >= 0);
    }
    else {
      this.filteredBooks = this.books!;
    }
    this.searchByCategoryId = categoryId;
    if (this.searchByCategoryId == "0") {
      this.filteredBooks = this.books!;
    }
    else {
      this.filteredBooks = this.filteredBooks.filter(prod => prod.categoryId.toString() == this.searchByCategoryId);
    }
  }


}
