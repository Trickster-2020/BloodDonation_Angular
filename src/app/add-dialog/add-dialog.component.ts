import { Component,Inject, OnInit } from '@angular/core';

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
  
  Bloodgroupchoices: string[] = [
    'A+',
    'B+',
    'AB+',
    'O+',
  ];

 
/*Inside the constructor we are injecting our newly created service */
  constructor(
    private _fb: FormBuilder,
    private _service:UserService,
    private _dialogRef:MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any      /*for update- otherwise this value is not accessible inside template so public */
    )
   {
    this.donerDetails = this._fb.group({
      Fname: '',
      Lname: '',
      Age: '',
      Bloodgroup: '',
      // Date:'',
     
    });
  }

//ngOnInit is the built in function like printf which runs first among all functions
//function for update

  ngOnInit(): void {
    this.donerDetails.patchValue(this.data);
  }



//This gets triggered whenever user clicks save button  
  onFormSubmit() {   

    if (this.donerDetails.valid) {
      if(this.data){        //this.data if we have it is update part
        this._service.updatedoner(this.data.id ,this.donerDetails.value)
        .subscribe({
          next:(val:any)=>{
            
            alert("User updated Successfully ");
            this._dialogRef.close(true);          //when we pass true then it will automatically refresh the list in the app component 
          },
          error:(err:any)=>{
            console.log(err)
          }
        });
      }
      else{                   //else part is for adding data incase if we don't have data
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


