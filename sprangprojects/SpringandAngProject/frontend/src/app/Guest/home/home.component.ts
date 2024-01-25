import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [AppService]
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

        }),
      (error: any) => {
        console.log(error)
      }
  }
  click() {
    alert("ww")
  }



}
