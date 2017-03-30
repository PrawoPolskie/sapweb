import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';
import { Router }                  from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { PageNotFoundComponent }   from './not-found.component';
import { AboutComponent }          from './about/about.component';
import { DocumentModule }          from './document/document.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    DocumentModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
