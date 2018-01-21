import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
