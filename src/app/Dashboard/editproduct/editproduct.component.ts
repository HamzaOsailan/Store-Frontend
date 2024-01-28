import {
  Component,
  OnInit
} from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';



import { AppService } from '../../app.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavComponent } from "../../nav/nav.component";
import { Product } from '../../Product';



@Component({
    selector: 'app-editproduct',
    standalone: true,
    templateUrl: './editproduct.component.html',
    styleUrl: './editproduct.component.css',
    providers: [AppService],
    imports: [SidebarComponent, NavComponent,ReactiveFormsModule],

})
export class EditproductComponent implements OnInit{
  constructor(private service: AppService, private route: ActivatedRoute, private router: Router) { }
  data:any
  product?:Product


    form = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    Description: new FormControl('',[Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required]),
  });



  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getOneProduct(id).subscribe(
      (data) => {
        this.product = data;
        if (this.product) {
          console.log("the id is : " + this.product.id);
        } else {
          console.error("Product not found");
        }
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
  // [Validators.required]


  onSubmit() {
    if (this.product && this.product.id !== undefined) {
      this.data = this.form.value;
      console.log(this.data);
  
      this.service.editProduct(this.product?.id, this.data).subscribe(
        (res) => {
          console.log(res); 
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
    } else {
      console.error('Product or Product ID is undefined');
    }
  }
  
  
  
  
  

  }

