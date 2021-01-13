import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private httpConfig: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: ""
  };
  private apiURL = environment.API_URL;

  constructor(private http: HttpClient) { }

  public postRequest = (model: any, api: string): any => {
    this.httpConfig.body = JSON.stringify(model);
    return this.http.request("POST", this.apiURL + api, this.httpConfig);
  }
  
  public getRequest = (api: string): any => {  
    return this.http.get(this.apiURL + api);
  }
}
