import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'
declare var $:any;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [
    
    trigger('fade', [
      transition(':enter, :leave', [
        animate(700, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  hidePreloader = () => {
    var preloader = $('.loading-wrapper');
    var preloaderFadeOutTime = 700;
    setTimeout(() => {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 700);
  }

  ngOnInit(){
    this.hidePreloader();
  }  
}
