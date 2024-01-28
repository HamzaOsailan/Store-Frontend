import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Product } from '../../Product';
import { NavComponent } from "../../nav/nav.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    providers: [AppService],
    imports: [NavComponent]
})
export class HomeComponent implements OnInit {
  Products: Product[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(
        (data) => {
          this.Products = data;
        
        },
        (error) => {
          console.error('Error in component:', error);
          // Handle error as needed
        }
      );
  }




}
