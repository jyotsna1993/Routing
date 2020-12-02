import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
data='jyotsna';
url="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
    b()
    {
      return this.http.get(this.url)
    }
   

}
