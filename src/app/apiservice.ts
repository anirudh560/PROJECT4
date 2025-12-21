import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  
  constructor(private http:HttpClient)
  {}
  
  getFakeStore(){
    return this.http.get("https://fakestoreapi.com/products")
      
    }
    
  }