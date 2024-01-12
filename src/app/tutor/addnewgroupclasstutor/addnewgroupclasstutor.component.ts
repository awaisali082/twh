import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-addnewgroupclasstutor',
  templateUrl: './addnewgroupclasstutor.component.html',
  styleUrls: ['./addnewgroupclasstutor.component.scss'],

})
export class AddnewgroupclasstutorComponent  {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
    
  };
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
}
  /* title='fileupload';
  Imageurl:any;
  public uploader =new FileUploader({
    url:this.Imageurl,itemAlias:'photo'
  })
  ngOnInit()
  {
    this.uploader.onAfterAddingFile=(file)=>{
      file.withCf
    } */
  
}

