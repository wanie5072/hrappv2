import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string = "";
  position: string = "";
  email: string = "";
  password: string = "";
  confirm_password: string = ""; 
  userCount: string = ""; 

  constructor() { }

  ngOnInit() { }

  onSubmit() {
     alert(
      this.name + ', ' + this.position + ', ' + this.email + ', ' + this.password + ', ' + this.confirm_password + ', ' + this.userCount
     )
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

}
