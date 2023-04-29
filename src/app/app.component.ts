import { Component,ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from './services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

/*By putting exclamation ! we are making all the field optional so that we won't get any error
we are not goint to define any interface so we are making type any of MatTableDatasource for now
*/

//defining all the columns name it should match with API keys and it should be same as API name or what is define in model of backend
 
  displayedColumns: string[] = [
  'id', 'Fname','Lname', 'Age','Bloodgroup','Date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  // listuser:any;
  /*inside the constructor we are injecting our newly created service */

  constructor(private _dialog:MatDialog,private _donerservice:UserService) { 
    this.getDonerList();
  }


/* This function will use the service function and that service function
   will bring the backend data i.e get the data and the data will be subscribed
   and placed inside the res variable and to put the data inside the datasource 
   variable new keyword is used to make the object and get the data of Mattablesource inside res
   and this.datasource will sort and paginate the table */

  getDonerList(){
    this._donerservice.getDoner().subscribe({         //this keyword is used since function is outside the constructor
      next: (res:any)=>{
        this.dataSource=new MatTableDataSource(res);  //object is made here inside (res) we are passing the response so it will create the datasource for us
        this.dataSource.sort=this.sort;  //this sort we getting from the viewchild so we are assigning this to our table datasource
        this.dataSource.paginator=this.paginator;
      },
    })
    
  }


/*This function is triggered when we click Add record button
  and it will go inside the AddDialogComponent and this component will 
  open the form for the user */ 
  
  openAddDialog(){
    const dialogRef = this._dialog.open(AddDialogComponent) 
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getDonerList();    //it;s for refreshing the list after adding new data
        }
      },


    });
  }


  // This function is for deleting the Table List 

  del(userid:any){ 
    console.log(userid);
      this._donerservice.deleteUser(userid).subscribe({
        next:(res:any)=>{
          alert("User Deleted");
          this.getDonerList();      // this line of function will automatically delete the list and refresh the table
        },
        error:console.log,
        
      });
  }


  //This function is for update or edit.

  openeditform(data:any){
    const dialogRef = this._dialog.open(AddDialogComponent,{      //so we need to store the reference as well
      data,
    });

    dialogRef.afterClosed().subscribe({          //this returns the new reference
      next: (val) => {
        if(val){
          this.getDonerList();
        }
      },


    });
   
  }  




// This function is for filtering table data like searching, sorting etc


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

