import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-course-manager-edit',
  templateUrl: './course-manager-edit.component.html',
  styleUrls: ['./course-manager-edit.component.scss']
})
export class CourseManagerEditComponent {

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