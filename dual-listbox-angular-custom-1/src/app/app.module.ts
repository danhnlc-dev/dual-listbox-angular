import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DlbSelectComponent } from './dlb-select/dlb-select.component';
import { DlbOptionsGroupComponent } from './dlb-options-group/dlb-options-group.component';
import { DlbOptionComponent } from './dlb-option/dlb-option.component';
import { DlbContactComponent } from './dlb-contact/dlb-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DlbSelectComponent,
    DlbOptionsGroupComponent,
    DlbOptionComponent,
    DlbContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
