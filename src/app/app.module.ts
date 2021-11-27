import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { CompatlistService } from './services/compatlist.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CompatlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
