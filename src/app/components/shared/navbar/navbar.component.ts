import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //MENU SCROLL
    $(window).on('scroll load', function() {
      if ($(".navbar").offset().top > 20) {
        $(".fixed-top").addClass("top-nav-collapse");
      } else {
        $(".fixed-top").removeClass("top-nav-collapse");
      }
    });

    $(function() {
      $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 720, 'easeInOutExpo');
        event.preventDefault();
      });
    });

    // NAVBAR MENU MOBILE CLOSE
    $(".navbar-nav li a").on("click", function(event) {
      if (!$(this).parent().hasClass('dropdown'))
          $(".navbar-collapse").collapse('hide');
    });

  }

}
