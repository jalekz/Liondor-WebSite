import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailsService, ContactModel } from "../../services/mails.service"
import sweet from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mailObject: ContactModel = {
    fullname: "",
    tel: "",
    email: "",
    coment: ""
  };

  constructor(private _mailsService: MailsService) { }

  ngOnInit(): void {
  }

  sendMailMsg(formContact : NgForm) {
    if(formContact.invalid) {
      Object.values(formContact.controls).forEach( control => {
        control.markAsTouched();
      });
    }
    else { //sendmail      
      sweet.fire({
        title: 'Enviando...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        onOpen: () => {
          sweet.showLoading();
        }
      });
      this.mailObject.fullname = formContact.value.nameContact;
      this.mailObject.tel = formContact.value.phoneContact;
      this.mailObject.email = formContact.value.emailContact;
      this.mailObject.coment = formContact.value.msgContact;

      this._mailsService.sendMail(this.mailObject, "/contact/sendMail").subscribe(
        result => {
          if(result.message == "Success") {
            sweet.fire({
              icon: 'success',
              title: 'Gracias',
              text: 'Mensaje enviado de manera correcta!'        
            });
            formContact.resetForm();
          }
          else {
            sweet.fire({
              icon: 'error',
              title: 'Error',
              text: 'Ocurrió un error, verifica que tu información sea correcta y vuelve a intentarlo'        
            });
          }
        },
        err => {
          sweet.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error, verifica que tu información sea correcta y vuelve a intentarlo'        
          });
        }
      )
    }
  }
}
