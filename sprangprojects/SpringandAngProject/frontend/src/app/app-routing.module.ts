import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Guest/home/home.component';
import { TableComponent } from './Dashboard/table/table.component'; // assuming you have an AdminComponent
import { Router } from '@angular/router';
import { FormComponent } from './Dashboard/form/form.component';
const routes: Routes = [
  { path: '', component: FormComponent }, // Note the change here
  { path: 'admin', component: TableComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
