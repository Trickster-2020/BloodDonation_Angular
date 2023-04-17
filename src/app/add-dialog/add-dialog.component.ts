import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {

  donerDetails: FormGroup;

  constructor(private _fb: FormBuilder,private _service:UserService,private _dialogRef:DialogRef <AddDialogComponent>) {
    this.donerDetails = this._fb.group({
      Name: '',
      Age: '',
      Gender: '',
      Blood_Group: '',
      Donated_date: '',
      PhoneNumber: '',
      Email: '',
      Occupation: '',
    })
  }

  bloodGroup: string[] = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-'
  ];

  occupation: string[] = [
    'Army',
    'Banker',
    'Carpenter',
    'Doctor',
    'Engineer',
    'Farmer',
    'Student',
    'Goverment Service'
  ];

  onFormSubmit() {
    if (this.donerDetails.valid) {
      this._service.addDoner(this.donerDetails.value).subscribe({
        next:(val:any)=>{
          alert("User Added Successfully ");
          this._dialogRef.close();
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
    }
  }

}
