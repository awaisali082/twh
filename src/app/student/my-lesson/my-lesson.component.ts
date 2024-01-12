import { Component } from '@angular/core';


@Component({
  selector: 'app-my-lesson',
  templateUrl: './my-lesson.component.html',
  styleUrls: ['./my-lesson.component.scss'],

})
export class MyLessonComponent {
  selected = 'option1';
 public  value:boolean=false;
 public  value1:boolean=true;


 oneononeclass()
 {
 this.value=true;
 this.value1=false;
 console.log('1');
 }
 groupClass()
 {
  this.value=false;
  this.value1=true;
  console.log('2')
 }

}
