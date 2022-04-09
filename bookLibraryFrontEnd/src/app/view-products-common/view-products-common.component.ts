import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-services/product.service';

export interface IProduct {
  author: string;
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

@Component({
  selector: 'app-view-products-common',
  templateUrl: './view-products-common.component.html',
  styleUrls: ['./view-products-common.component.css']
})
export class ViewProductsCommonComponent implements OnInit {
    products!: IProduct[];
  categories!: ICategory[];
  filteredProducts!: IProduct[];
  searchByProductName!: string;
  searchByCategoryId: string = "0";
  imageSrc!: string;
  showMsgDiv: boolean = false;
  userRole: string | null;
  customerLayout!: boolean;
  commonLayout!: boolean;

  constructor(private _productService: ProductService,private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    if (this.userRole = "admin") {
      this.customerLayout = true;
    }
    else {
      this.commonLayout = true;
    }
   }

  ngOnInit(){
    this.getProducts();
    this.getProductCategories();
    if (this.products == null) {
      this.showMsgDiv = true;
    }
    this.filteredProducts = this.products;
  }

  getProducts() {
        this._productService.getProducts().subscribe(
          responseProductData => {
            this.products = responseProductData;
            this.filteredProducts = responseProductData;
            this.showMsgDiv = false;
          }
        );
      }
      getProductCategories() {
        this._productService.getProductCategories().subscribe(
          responseCategoryData => this.categories = responseCategoryData
        );
      }

      searchProduct(productName: string) {
          if (this.searchByCategoryId == "0") {
            this.filteredProducts = this.products;
          }
          else {
            this.filteredProducts = this.products.filter(prod => prod.categoryId.toString() == this.searchByCategoryId);
          }
          if (productName != null || productName == "") {
            this.searchByProductName = productName;
            this.filteredProducts = this.filteredProducts.filter(prod => prod.productName.toLowerCase().indexOf(productName.toLowerCase()) >= 0);
          }
          if (this.filteredProducts.length == 0) {
            this.showMsgDiv = true;
          }
          else {
            this.showMsgDiv = false;
          }
        }
        searchProductByCategory(categoryId: string) {
          if (this.searchByProductName != null || this.searchByProductName == "") {
            this.filteredProducts = this.products.filter(prod => prod.productName.toLowerCase().indexOf(this.searchByProductName.toLowerCase()) >= 0);
          }
          else {
            this.filteredProducts = this.products;
          }
          this.searchByCategoryId = categoryId;
          if (this.searchByCategoryId == "0") {
            this.filteredProducts = this.products;
          }
          else {
            this.filteredProducts = this.filteredProducts.filter(prod => prod.categoryId.toString() == this.searchByCategoryId);
          }
        }

}
