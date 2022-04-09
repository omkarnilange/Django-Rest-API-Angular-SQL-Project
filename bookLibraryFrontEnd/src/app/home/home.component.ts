import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRole: string | null;
  customerLayout!: boolean;
  commonLayout!: boolean;

  constructor() { 
    this.userRole = sessionStorage.getItem('userName');
    if (this.userRole == "admin") {
      this.customerLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

  ngOnInit(): void {
  }

}
