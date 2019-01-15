import { RouterModule, Routes } from '@angular/router';
import { InstrumentListComponent } from "./component/instrument-list/instrument-list.component";
import { InstrumentEditComponent } from "./component/instrument-edit/instrument-edit.component";

const routes: Routes = [
    { path: '', component: InstrumentListComponent },
    { path: 'instrument-edit', component: InstrumentEditComponent },
    { path: 'instrument-list', component: InstrumentListComponent }
];

export const routing = RouterModule.forRoot(routes);