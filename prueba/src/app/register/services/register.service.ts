import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
environment

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  /**
   * 
   * @param body body contains the entire object with the user information required for registration
   * @returns 'return' returns a json object with the verification of the process
   */
  post(body:any){
    return this.http.post(environment.back+'registro',body);
  }
}
