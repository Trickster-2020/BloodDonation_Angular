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

  displayedColumns: string[] = ['id', 'Name', 'Age', 'Gender','Blood_Group','Occupation','PhoneNumber','Email','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  listuser:any;

  constructor(private _dialog:MatDialog,private _donerservice:UserService) { 
    this.getDonerList();
  }



  getDonerList(){
    this._donerservice.getDoner().subscribe({
      next: (res:any)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
    })
    
  }
  openAddDialog(){
    this._dialog.open(AddDialogComponent)
  }
  del(userid:any){ 
    console.log(userid);
      this._donerservice.deleteUser(userid).subscribe({
        next:(res:any)=>{
          alert("User Deleted");
        },
        error:console.log,
        
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

