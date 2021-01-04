import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'liondor-website';
  ngOnInit() {    

    //SCROLL TOP
    $('body').prepend('<a href="body" class="scroll-to-top page-scroll"><i class="fa fa-chevron-up"></i></a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.scroll-to-top').fadeIn('500');
        } else {
            $('a.scroll-to-top').fadeOut('500');
        }
    });

  }
}