import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    InputTextModule,
    MatIconModule,
    InputNumberModule,
    MatTableModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


