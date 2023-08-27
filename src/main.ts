import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
