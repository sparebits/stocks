import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { SharesComponent } from './shares/shares.component';
import { InstrumentListComponent } from './component/instrument-list/instrument-list.component';
import { InstrumentEditComponent } from './component/instrument-edit/instrument-edit.component';

@NgModule( {
    declarations: [
        AppComponent,
        SharesComponent,
        InstrumentListComponent,
        InstrumentEditComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
