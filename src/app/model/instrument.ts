/*
 * instrument.ts
 * Created on 30.12.2018 10:55
 */
export class Instrument {
    public name: string;
    public code: string;
    public edit: boolean;

    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
        this.edit = false;
    }
}
