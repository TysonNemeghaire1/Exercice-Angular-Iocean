import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { TitleFilterPipe } from './pipes/titleFilter.pipe';
import {FormsModule} from '@angular/forms';
import { TitleSortPipe } from './pipes/title-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleFilterPipe,
    TitleSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
