import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

enableProdMode();//to activate production mode

platformBrowserDynamic().bootstrapModule(AppModule);
