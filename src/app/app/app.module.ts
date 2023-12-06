import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainComponent } from "../layout/main/main.component";
import { SearchBarComponent } from '../search-bar/search-bar.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainComponent,
        SearchBarComponent,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
