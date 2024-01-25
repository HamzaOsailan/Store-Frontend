import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private url = "http://localhost:8080/";
  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>
    (this.url+"product")
  }


  addnewProduct(product: Product){
    return this.http.post<any>(`${this.url}postNewProduct`, {product},);
  }
  
  editProduct(product?:Product , id?:number):Observable<any>{
    return this.http.put<Product>(`${this.url}editProduct/${id}`,product)
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}deleteProduct/${id}`)
  }
}
