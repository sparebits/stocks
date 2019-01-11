import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import { Instrument } from '../../model/instrument';

@Component({
    selector: 'app-instrument-edit',
    templateUrl: './instrument-edit.component.html',
    styleUrls: ['./instrument-edit.component.css']
})
export class InstrumentEditComponent implements OnInit {

    instrument: Instrument;
    editForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
    }

}
