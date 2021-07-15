import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../pages/interfaces/user.interface';

//Etiqueta para usarlo globalmente
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  // <TablaName[]> para declarar el valor de retorno
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/user/');
  }

  deleteUser(dni: string): Observable<String> {
    return this.http.delete<String>('http://localhost:8080/user/', {
      params: { dni: dni },
    });
  }
}
