import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LogInService {

  constructor(private http: HttpClient) {
  }

  /**
   * 
   * @param body 
   * @returns 
   * 
   * in the body variable the login credentials are 
   * sent to obtain the response from the server
   */
  post(body:any){
    return this.http.post(environment.back+'login/v1',body);
  }
}
