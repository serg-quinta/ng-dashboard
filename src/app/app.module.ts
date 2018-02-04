import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FirstDirective } from './common/directives/first.directive';
import { SearchComponent } from './header/search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './common/pipes/filter.pipe';
import { CardsService } from './common/services/cards.service';
import { BASE_URL, BASE_URL_TOKEN } from './config';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    SidenavComponent,
    FirstDirective,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    CardsService,
    {provide: BASE_URL_TOKEN, useValue: BASE_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
