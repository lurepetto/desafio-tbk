import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../pages/interfaces/product.interface';

//Etiqueta para usarlo globalmente
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  // <TablaName[]> para declarar el valor de retorno
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product/');
  }

  deleteProduct(productId: string): Observable<String> {
    return this.http.delete<String>('http://localhost:8080/product/', {
      params: { productId: productId },
    });
  }
}
