import { Component,Inject, OnInit } from '@angular/core';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit{

  donerDetails: FormGroup;

 /* constructor(private _fb: FormBuilder,private _service:UserService,private _dialogRef:DialogRef <AddDialogComponent>) {
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
  } */
  // 'id', 'Fname','Lname', 'Age','Bloodgroup','Date'

  constructor(
    private _fb: FormBuilder,
    private _service:UserService,
    private _dialogRef:MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    )
   {
    this.donerDetails = this._fb.group({
      Fname: '',
      Lname: '',
      Age: '',
      Bloodgroup: '',
      // Date:'',
     
    })
  }

  Bloodgroupchoices: string[] = [
    'A+',
    'B+',
    'AB+',
    'O+',
  
  ];

  /*
  occupation: string[] = [
    'Army',
    'Banker',
    'Carpenter',
    'Doctor',
    'Engineer',
    'Farmer',
    'Student',
    'Goverment Service'
  ]; */

  ngOnInit(): void {
    this.donerDetails.patchValue(this.data);
  }

  onFormSubmit() {

    if (this.donerDetails.valid) {
      if(this.data){
        this._service.updatedoner(this.data.id ,this.donerDetails.value).subscribe({
          next:(val:any)=>{
            
            alert("User updated Successfully ");
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.log(err)
          }
        });

      }
      else{
        this._service.addDoner(this.donerDetails.value).subscribe({
          next:(val:any)=>{
            
            alert("User Added Successfully ");
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.log(err)
          }
        });

      }
    }
  }
}











/*onFormSubmit() {

  if (this.donerDetails.valid) {
    if(this.data){
      this._service.updatedoner(this.data.id ,this.donerDetails.value).subscribe({
        next:(val:any)=>{
          console.log(this.donerDetails.value)
          alert("User updated Successfully ");
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err)
        }
      });

    }
    else{
      this._service.addDoner(this.donerDetails.value).subscribe({
        next:(val:any)=>{
          console.log(this.donerDetails.value)
          alert("User Added Successfully ");
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err)
        }
      });

    }
  }
}
*/

