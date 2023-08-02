import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-department',
  templateUrl: './add-new-department.component.html',
  styleUrls: ['./add-new-department.component.scss']
})
export class AddNewDepartmentComponent implements OnInit {
  public registrationForm!: FormGroup;
  // public submited:
email: any;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddNewDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { console.log(data);
    }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(): void {
    this.registrationForm = this.formBuilder.group({
      departmentName: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postelCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        zipCode: ['', Validators.required],
        // You can add more address fields as needed (e.g., country, etc.)
      }),
    });
  }

  // This method is called when the form is submitted
  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Handle the form submission logic here (e.g., send data to the server)
      console.log(this.registrationForm.value);
    } else {
      // Mark form fields as touched to display validation messages
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  // Utility function to mark all form fields as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  } 

}
