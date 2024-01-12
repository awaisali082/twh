import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-one-one-class-schedule',
  templateUrl: './one-one-class-schedule.component.html',
  styleUrls: ['./one-one-class-schedule.component.scss']
})
export class OneOneClassScheduleComponent {
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
}
