import { Component } from '@angular/core';

@Component({
  selector: 'app-tutormylesson1on1orgroupclass',
  templateUrl: './tutormylesson1on1orgroupclass.component.html',
  styleUrls: ['./tutormylesson1on1orgroupclass.component.css']
})
export class Tutormylesson1on1orgroupclassComponent {
 public mylesson1:boolean=true;
  public grouplesson1:boolean=false;
constructor()
{

}
  grouplesson()
{

  this.grouplesson1=true;
  this.mylesson1=false;
}
mylesson()
{
  console.log('lesson');
  this.grouplesson1=false;
  this.mylesson1=true;
}
}
