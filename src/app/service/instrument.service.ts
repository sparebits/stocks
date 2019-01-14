/*
 * instrument.service.ts
 * Created on 30.12.2018 10:55
 */
import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument';

@Injectable( {
    providedIn: 'root'
} )
export class InstrumentService {

    private instruments: Array<Instrument> = [
        new Instrument( 'Сирма Груп Холдинг АД', 'SKK' ),
        new Instrument( 'Стара Планина холд АД', '5SR' )
    ];

    constructor() { }

    getInstruments() {
        return this.instruments;
    }

    getInstrumentByCode( code ) {
        return this.instruments.filter( function( item ) {
            return item.code === code
        } )[0];
    }
}
