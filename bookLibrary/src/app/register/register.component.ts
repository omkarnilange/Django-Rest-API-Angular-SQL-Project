import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  msg: string;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      emailId: ['', [Validators.required, Validators.minLength(12)]],
      password: ['',[Validators.required]],
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]]
    });
  }

  SubmitForm(form: FormGroup) {
    console.log(form.value.username);
    console.log(form.value.emailId);
    console.log(form.value.password);
    console.log(form.value.firstname);
    console.log(form.value.lastname);

    if (this.registerForm.valid) {
      this.msg = "Signup Successful"
    }
    else {
      this.msg="Try again Later"
    }
  }


}
