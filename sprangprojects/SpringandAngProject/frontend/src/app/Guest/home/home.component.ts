import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule  } from '@angular/router';
import { AppService } from '../../app.service';
import { Product } from '../../Product';
import { NavComponent } from "../../nav/nav.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    providers: [AppService],
    imports: [NavComponent,RouterModule,]
})
export class HomeComponent implements OnInit {
  Products: Product[] | undefined
  url: string = "http://localhost:8081/";
  productId: string | null;
  constructor(private service: AppService, private router: Router ,private route:ActivatedRoute) { 
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(
        (data) => {
          this.Products = data;
        console.log(this.Products)
        },
        (error) => {
          console.error('Error in component:', error);
        
        }
      );
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
  




}
