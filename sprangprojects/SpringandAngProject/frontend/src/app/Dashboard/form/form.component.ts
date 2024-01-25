import {
  Component,
  OnInit
} from '@angular/core';

import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: []
})
export class FormComponent implements OnInit {
  constructor(private Service: AppService, private router: Router,) { }

  // [Validators.required]
  form = new FormGroup({
    productName: new FormControl(''),
    Description: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  onsubmit() {
    // alert('dawd')
    if (this.form.valid) {
      console.log('Form is valid');
      
      const newProduct: Product = {
        imageUrl: this.form.value.imageUrl ?? '',
        productName: this.form.value.productName ?? '',
        Description: this.form.value.Description ?? '',
        quantity: Number(this.form.value.quantity) || 0,
        price: Number(this.form.value.price) || 0
      };

      console.log('New Product Data:', newProduct);

      this.Service.addnewProduct(newProduct).subscribe(
        (data: any) => {
          console.log('Response Data:', data);
          this.router.navigate(['/'])
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
    }
  }


  ngOnInit(): void {
   
  }





}

//   console.log(this.product);

//   this.Service.addnewProduct(this.product).subscribe(
//     (data) => {
//       console.log(data);
//       // Handle the response or navigate to another page here
//     },
//     (error) => {
//       console.error('Error occurred:', error);
//       // Handle the error appropriately
//     }
//   );
// }








