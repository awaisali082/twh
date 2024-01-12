/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

 
registerLicense(' Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVJyWmFZfV1gd19GYVZVQmYuP1ZhSXxQdk1iXH9dcHdXRGBeUkM');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

