import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../Product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [AppService]
})
export class TableComponent implements OnInit {
  Products: Product[] | undefined
  product: any;
  constructor(private service: AppService, private router: Router) { }

  data: any

  //get the data
  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(data => {
        this.Products = data;
        console.log(this.Products)

      })
  }



  
}


