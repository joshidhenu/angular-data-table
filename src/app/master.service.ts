import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from './login/login.component';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  registerUser(userData: Signup){
    return this.http.post<any>('http://127.0.0.1:8000/api/user/register/',userData);
  }

  GetCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer")
  }
}
