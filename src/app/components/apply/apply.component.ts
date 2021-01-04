import { Component, OnInit } from '@angular/core';
import { AppliesService, Apply } from "../../services/applies.service";
declare var $:any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  applies: Apply[] = [];
  gridCreated: boolean = false;
  applySelected: Apply = {
    filterID: "",
    imgPath: "",
    modalBody: "",
    modalTitle: "",
    title: ""
  };

  constructor(private _appliesService : AppliesService) {     
    this.applies = this._appliesService.getApplies();    
  }

  ngOnInit(): void {
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
      console.log("in");
    }
  }
}
