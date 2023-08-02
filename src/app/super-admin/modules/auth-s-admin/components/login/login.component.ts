import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData =
  {
    email: '',
    password: '',
    remember: '',
  };
  onSubmit() {
    localStorage.setItem('formData', JSON.stringify(this.formData));
    }
}
