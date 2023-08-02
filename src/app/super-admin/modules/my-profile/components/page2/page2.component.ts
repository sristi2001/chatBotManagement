import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  profileForm!: FormGroup ;
email: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['Deepak', Validators.required],
      lastName: ['Rathor', Validators.required],
      email: ['deepak@gmail.com', [Validators.required, Validators.email]],
      phone: ['123456789', Validators.required],
      password: ['12345', Validators.required]
    });
  }

  onSubmit() {
  }
}
