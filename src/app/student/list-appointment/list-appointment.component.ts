import { Component } from '@angular/core';
import {AppointmentServiceService} from '../../service/appointment-service.service';
@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent {
title = 'pagination';
POSTS:any;
page:number=1;
count:number=0;
tableSize:number=10;
tableSizes:any=[5,10,15,20];
mydata:any=[];

constructor(private appointmentServiceService:AppointmentServiceService)
{

}
ngOnInit():void
{
this.postList();
}
onTableDataChange(event:any):void
{
this.page=event;
this.postList();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.postList();

}
postList():void
{
  this.appointmentServiceService.getAllPosts().subscribe((response)=>{
    this.POSTS=response;
    console.log(this.POSTS,'yes');
  console.log(this.mydata=response,'2nd') ;
  this.mydata=this.POSTS; 
  
  })

}
}
