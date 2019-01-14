import { RouterModule, Routes } from '@angular/router';
import { InstrumentEditComponent } from "./component/instrument-edit/instrument-edit.component";

const routes: Routes = [
    { path: 'instrument-edit', component: InstrumentEditComponent }
];

export const routing = RouterModule.forRoot(routes);