import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }
  
getTododata(){

  return this.http.get('https://jsonplaceholder.typicode.com/todos/')

    
  }
  
}

