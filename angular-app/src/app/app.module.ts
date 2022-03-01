import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DocumentsModule } from './documents/documents-module/documents.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DocumentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
