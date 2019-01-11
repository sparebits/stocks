/*
 * instrument-list.component.ts
 * Created on 30.12.2018 10:55
 */
import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../../service/instrument.service';
import { Instrument } from '../../model/instrument';

@Component({
    selector: 'app-instrument-list',
    templateUrl: './instrument-list.component.html',
    styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

    public instruments: Array<Instrument>;

    constructor(private instrumentService: InstrumentService) { }

    ngOnInit() {
        this.instruments = this.instrumentService.getInstruments();
    }

    edit(instrument) {
    }

    delete(instrument) {
        // FIXME dialog to confirm deleteion here!
        // FIXME call service for removing into back end
        this.instruments = this.instruments.filter(i => i !== instrument);
    }

    cancel(instrument) {
    }

    add() {}

}
