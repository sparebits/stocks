import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharesComponent } from './shares/shares.component';
import { InstrumentListComponent } from './component/instrument-list/instrument-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SharesComponent,
        InstrumentListComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
