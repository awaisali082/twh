import { Component, OnInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-student-slider',
  templateUrl: './student-slider.component.html',
  styleUrls: ['./student-slider.component.scss']
})
export class StudentSliderComponent implements  OnInit {
ngOnInit()
{
  $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 5,
    arrow:true,
    centerMode: true,
    });
  });
}
}
