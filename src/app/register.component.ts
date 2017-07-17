import { Component } from '@angular/core';
import { CallService } from './call.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./app.component.css']
})
export class RegisterComponent {
  title = 'Register';

  constructor( private callservices: CallService) {}

  passwordChecking(password: string, repassword: string) {
    if (password !== repassword) {
      console.log('The passwords do not match');
      return false;
    }else {
      return true;
    }
  }

  register( first_name: string, last_name: string, email: string,
     phone_number: string, password: string, repassword: string) {

    if (this.passwordChecking(password, repassword)) {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Repassword:', repassword);

      this.callservices.register(first_name + ' ' + last_name,
      phone_number, email, password)
        .subscribe(res => {
          console.log(res);
        });
    }
  }
}
