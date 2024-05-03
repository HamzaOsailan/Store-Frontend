import {
  Component,
  OnInit
} from '@angular/core';

import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { FormControl, FormGroup,  ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from "../../nav/nav.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    providers: [AppService],
    standalone: true,
    imports: [ReactiveFormsModule, NavComponent, SidebarComponent]
})
export class FormComponent implements OnInit {
  constructor(private Service: AppService, private router: Router,) { }
  data:any

  ngOnInit(): void {

  }

  // [Validators.required
  form = new FormGroup({
    productName: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required]),
  });

  onsubmit() {
    this.data=this.form.value


      console.log('New Product Data:', this.data);

      this.Service.addnewProduct(this.data).subscribe(
        (data: any) => {
          console.log('Response Data:', data);
          this.router.navigate(['/dashboard'])
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
    }
  }


  





