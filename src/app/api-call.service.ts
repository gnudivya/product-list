import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseUrl ="https://crudcrud.com/api/d6a7b2a0c5344b759e929f323188be27"

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

 updateProduct(obj: any, id: string): Observable<any>{
   return this.http.put(this.baseUrl + '/product/' + id, obj);
 }
}
 