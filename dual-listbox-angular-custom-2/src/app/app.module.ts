import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DlbSelectComponent } from './dlb-select/dlb-select.component';
import { DlbOptionsGroupComponent } from './dlb-options-group/dlb-options-group.component';
import { DlbOptionComponent } from './dlb-option/dlb-option.component';
import { DlbContactComponent } from './dlb-contact/dlb-contact.component';
import { DlbSearchComponent } from './dlb-search/dlb-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DlbSelectComponent,
    DlbOptionsGroupComponent,
    DlbOptionComponent,
    DlbContactComponent,
    DlbSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
