import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Inside class
public backendUrl = "https://trav-backend.herokuapp.com/api/users";

  
  
registerUser(user:any) {
  return this.httpClient.post(this.backendUrl, user)
}

  constructor(private httpClient:HttpClient ) { 
    
  }
}
