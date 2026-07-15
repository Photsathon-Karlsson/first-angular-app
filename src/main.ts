import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
  
/*
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app. component';
import { HeaderComponent } from './app/header. component';

bootstrapApplication(AppComponent) . catch( (err) => console.error(err));
bootstrapApplication(HeaderComponent);
*/


