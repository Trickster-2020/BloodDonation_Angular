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




  listuser:any;
  constructor(private user:UserService,private _dialog:MatDialog,private _donerservice:UserService) { 
    this.getDonerList();
  }

  getDonerList(){
    this._donerservice.getDoner()
    
  }
  openAddDialog(){
    this._dialog.open(AddDialogComponent)
  }
  del(userid:any){ 
      this.user.deleteUser(userid).subscribe(data=>{
        console.log("User deleted")
      })
  }

}

