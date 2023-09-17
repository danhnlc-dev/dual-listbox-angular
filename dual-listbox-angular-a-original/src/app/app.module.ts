import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DSOptionComponent, DSOptionsGroupComponent, DSSelectComponent } from './ds-select.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DSSelectComponent,
    DSOptionsGroupComponent,
    DSOptionComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
