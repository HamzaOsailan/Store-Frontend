import { Routes } from '@angular/router';
import { HomeComponent } from './Guest/home/home.component';
import { FormComponent } from './Dashboard/form/form.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { TableComponent } from './Dashboard/table/table.component';
import { LoginComponent } from './Dashboard/login/login.component';
import { EditproductComponent } from './Dashboard/editproduct/editproduct.component';
import { ViewComponent } from './Guest/view/view.component';

export const routes: Routes = [
    //admin routes -->
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'dashboard', component: TableComponent
    },
    {
        path: 'addNewProduct', component: FormComponent
    },
    {
        path: 'editProduct/:id', component: EditproductComponent
    },


    //guest routes -->
    {
        path: '', component: HomeComponent
    },
    {
        path: 'view/:id',component: ViewComponent,
    },
    
];
