import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private _userService: UserService,private router: Router) { }
  submitRegisterForm(form: NgForm) {
  console.log(form.value);
  this._userService.register(form.value).subscribe(result=>{
  if(result.token){
    console.log(result);
    alert('Success');
    this.router.navigate(['/login'])
  }
  else{
    alert('username');}
})
  }
  ngOnInit() {
  }
}
 
