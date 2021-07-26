import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseUrl ="https://crudcrud.com/api/6c13d7980f4a4c9f854bd2073ba380bf"

  constructor( private http:HttpClient) { }


  getProduct(): Observable<any>{
    return this.http.get(this.baseUrl + '/product')
 }

 postProduct( obj: any ): Observable<any> {
  return this.http.post( this.baseUrl + '/product', obj);
 } 

 deleteProduct(id: string): Observable<any>{
  return this.http.delete(this.baseUrl + '/product/' + id)
 }

}
