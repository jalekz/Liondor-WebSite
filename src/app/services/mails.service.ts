import { Injectable } from '@angular/core';
import { MainService } from './main.service'

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private mainservice: MainService) { }

  public sendMail = (mailObj: any, api: string) => {
    return this.mainservice.postRequest(mailObj, api)
  }
}

export interface VacantModel {
  vacant: string;
  fullname: string;
  tel: string;
  email: string;
  att: string;
};

export interface ContactModel {
  fullname: string;
  tel: string;
  email: string;
  coment: string;  
};