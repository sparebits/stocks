import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharesComponent } from './shares/shares.component';
import { InstrumentListComponent } from './component/instrument-list/instrument-list.component';
import { InstrumentEditComponent } from './component/instrument-edit/instrument-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        SharesComponent,
        InstrumentListComponent,
        InstrumentEditComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
