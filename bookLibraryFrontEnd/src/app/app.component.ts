import { Component } from '@angular/core';
import { ServicesService } from './services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Library';
  message:any;

  constructor(private ser: ServicesService){

  }
  ngOnInit():void{
    this.showMessage();
  }

  showMessage(){

    this.ser.getMessage().subscribe(data=>{
      this.message=data,
      console.log(this.message)
    });

  }
}
