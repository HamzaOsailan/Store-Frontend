import {
  Component,
  OnInit
} from '@angular/core';


import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';


import { NavComponent } from "../../nav/nav.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AppService } from '../../app.service';
import { Product } from '../../Product';


@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ReactiveFormsModule, NavComponent, SidebarComponent],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent {
  constructor(private Service: AppService, private router: Router) { }


  data: any
  
  // [Validators.required]
  form = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    Description: new FormControl(''),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  onsubmit() {
    this.data=this.form.value

    console.log(this.data)

      this.Service.addnewProduct(this.data).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['dashbaord']);
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
    }
    
    
    ngOnInit(): void {}

  }




