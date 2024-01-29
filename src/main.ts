import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as toastr from 'toastr';
toastr.options = {
  closeButton: true,
  progressBar: true,
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
