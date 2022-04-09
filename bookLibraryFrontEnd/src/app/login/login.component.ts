import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../services/user-services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status!: string;
  errorMsg!: string;
  msg!: string;
  showDiv: boolean = false;
  constructor(private _userService: UserService,private router: Router) { }
  submitLoginForm(form: NgForm) {
  console.log(form.value);
  
  
  this._userService.login(form.value).subscribe(result=>{
  if(result.non_field_errors){
  
    alert('Fail');
  }
  
  else{
    console.log(result);
    alert('Success');
    sessionStorage.setItem('userName', form.value.username);
    this.router.navigate(['/home']);
  }
})
  }
  ngOnInit() {
  }
}
 
