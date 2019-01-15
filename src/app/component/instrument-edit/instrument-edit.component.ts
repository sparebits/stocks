import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { InstrumentService } from '../../service/instrument.service';
import { Instrument } from '../../model/instrument';

@Component( {
    selector: 'app-instrument-edit',
    templateUrl: './instrument-edit.component.html',
    styleUrls: ['./instrument-edit.component.css']
} )
export class InstrumentEditComponent implements OnInit {

    instrument: Instrument;
    editForm: FormGroup;

    constructor( private formBuilder: FormBuilder, private router: Router, private instrumentService: InstrumentService ) { }

    ngOnInit() {
        this.editForm = this.formBuilder.group( {
            code: [''],
            name: ['', Validators.required]
        } );
    }

    onSubmit() {
        this.router.navigate( ['instrument-list'] );
    }

}
