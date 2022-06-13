export interface Options {
    value: string;
    label: string;
}

export class Options {
    value: string;
    label: string;
    constructor(v:string, l:string){
        this.value = v;
        this.label = l;
    }
}