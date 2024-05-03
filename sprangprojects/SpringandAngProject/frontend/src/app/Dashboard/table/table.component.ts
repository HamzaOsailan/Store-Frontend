import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Product } from '../../Product';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavComponent } from "../../nav/nav.component";
import { filter } from 'rxjs';

// Import other necessary components and services

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [AppService],
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavComponent] // Add CommonModule to the imports array
})
export class TableComponent implements OnInit {

  Products: Product[] | undefined;
  data: any;

  constructor(private service: AppService, private router: Router) { }


  //get products 
  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(
        (data) => {
          this.Products = data;

        },
        (error) => {
          throw new Error("the type of error" + error);
        }
      );
  }


  //delete products 
  delete(id: number | undefined) {
    if (id !== undefined) {
        this.service.deleteProduct(id).subscribe(
            (data) => {
                this.Products = this.Products?.filter((product) => product.id !== id);
            },
            (error) => {
                console.error(error);
            }
        );
    } else {
        console.error('Invalid or undefined id');
    }
}



}
