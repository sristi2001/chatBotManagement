import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-add-new-department',
  templateUrl: './add-new-department.component.html',
  styleUrls: ['./add-new-department.component.scss']
})
export class AddNewDepartmentComponent implements OnInit {
  public registrationForm!: FormGroup;
  public submitted:boolean = false;
  // email: any;

  constructor(private formBuilder: FormBuilder , private UsersDataService: UsersDataService)
    /* public dialogRef: MatDialogRef<AddNewDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) */ { 
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
      address: ['', Validators.required],
    });
  }
  get f(): {[key: string]:AbstractControl}
  {
    return this.registrationForm.controls
  }

  // This method is called when the form is submitted
  public onSubmit()  {
    this.submitted=true;
    console.log(this.registrationForm);
    /* if (this.registrationForm.valid) {
      // Handle the form submission logic here (e.g., send data to the server)
      console.log(this.registrationForm.value);
    } else {
      // Mark form fields as touched to display validation messages
      this.markFormGroupTouched(this.registrationForm);
    } */

    if (this.registrationForm.valid) {
      const departmentData = this.registrationForm.value;
      this.UsersDataService.addDepartment(departmentData).subscribe(
        () => {
          console.log('Department added successfully');
          // Optional: Fetch updated department list after adding
          this.UsersDataService.getDepartments().subscribe(
            (departments) => {
              // Update your dpList or perform any necessary actions
            },
            (error) => {
              console.error('Error fetching department list', error);
            });
        },
        (error: any) => {
          console.error('Error adding department', error);
        });
    }
  

  }
}
// Utility function to mark all form fields as touched
  /* markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }  */