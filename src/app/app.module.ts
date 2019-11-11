import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
MatInputModule,
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatExpansionModule,} from '@angular/material';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
