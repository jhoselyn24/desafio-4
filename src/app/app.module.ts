import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageModuleModule } from './pages/page-module/page-module.module';

import { ContentPageComponent } from './pages/content-page/content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent
  ],
  imports: [
    BrowserModule,
    PageModuleModule,
  ],
  exports: [
    ContentPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
