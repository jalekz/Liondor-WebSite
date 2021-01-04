import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //TYPED
    const options = {
      strings: ['TALENT', 'PROFESSIONALS', 'PEOPLE'],
      typeSpeed: 80,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }

}
