import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { SidebarComponent } from "./Dashboard/sidebar/sidebar.component";
import { HomeComponent } from './Guest/home/home.component';
import { FormComponent } from './Dashboard/form/form.component';
import { TableComponent } from "./Dashboard/table/table.component";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({

    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, SidebarComponent, HomeComponent, FormComponent, TableComponent,ReactiveFormsModule,HttpClientModule]
})
export class AppComponent {
  title = 'frontend';
}
