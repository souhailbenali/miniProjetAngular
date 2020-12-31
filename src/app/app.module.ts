import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    AddPersonneComponent,
        UpdatePersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
