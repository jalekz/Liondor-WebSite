import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppliesService, Apply } from "../../services/applies.service";
import { MailsService, VacantModel } from "../../services/mails.service"
import sweet from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})

export class ApplyComponent implements OnInit {  

  applies: Apply[] = [];
  gridCreated: boolean = false;
  fileName: string = "Carga tu CV (formato PDF | max 5MB)";
  fileError: string = "Seleccione un archivo con formato PDF";
  fileValid: boolean = false;
  cvBaseData: string | ArrayBuffer = "";
  applySelected: Apply = {
    filterID: "",
    imgPath: "",
    modalBody: "",
    modalTitle: "",
    title: ""
  };
  mailObject: VacantModel = {
    vacant: "",
    fullname: "",
    tel: "",
    email: "",
    att: ""
  };

  constructor(private _appliesService : AppliesService, private _mailsService: MailsService) { }

  ngOnInit(): void {
    this._appliesService.getApplies().subscribe( apps => {
      this.applies = apps;
    });
    setTimeout(() => {
      $(".all-filter").click();
    }, 1000);    
  }

  createGrid() {
    if(!this.gridCreated) {
      var $grid = $('.grid').isotope({
        itemSelector: '.apply-item',
        layoutMode: 'masonry',
        stagger: 90
      });
      $('.filters-button-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
      this.gridCreated = true;
      $grid.isotope('reloadItems');
    }
  }

  sendMail(formApply : NgForm) {    
    if(formApply.invalid || this.cvBaseData == "") {
      Object.values(formApply.controls).forEach( control => {
        control.markAsTouched();
      });
    }
    else {
      sweet.fire({
        title: 'Enviando...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        onOpen: () => {
          sweet.showLoading();
        }
      });
      this.mailObject.vacant = this.applySelected.title;
      this.mailObject.fullname = formApply.value.nameApply;
      this.mailObject.tel = formApply.value.phoneApply;
      this.mailObject.email = formApply.value.emailApply;
      this.mailObject.att = this.cvBaseData.toString().split(',')[1];
      
      this._mailsService.sendMail(this.mailObject, "/Vacant/sendMail").subscribe(
        result => {
          if(result.message == "Success") {
            sweet.fire({
              icon: 'success',
              title: 'Gracias',
              text: 'Mensaje enviado de manera correcta!'        
            });
            formApply.resetForm();
            this.cvBaseData = "";
            this.fileName = "Carga tu CV (formato PDF | max 5MB)";
            this.fileValid = false;
            
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
      );
    }
  }

  FileInputHandler(fileInput : any) {    
    if (fileInput.target.files && fileInput.target.files[0]) {
      const max_size = 5000000;
      let fileUp = this;
      fileUp.cvBaseData = "";

      if (fileInput.target.files[0].size > max_size) {
        this.fileError = "El archivo debe ser de menos de 5MB";
        this.fileName = "Carga tu CV (formato PDF | max 5MB)";
        this.fileValid = false;
        return false;
      }
      if (fileInput.target.files[0].type != "application/pdf") {
        this.fileError = "Sólo se permiten archivos PDF";
        this.fileName = "Carga tu CV (formato PDF | max 5MB)";
        this.fileValid = false;
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.target.files[0]);
      reader.onload = function () {
        fileUp.cvBaseData = reader.result;
      };
      this.fileName = fileInput.target.files[0].name;
      this.fileValid = true;
    }
  }
}
