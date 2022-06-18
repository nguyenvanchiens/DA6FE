export class PhuThuoc {
    maOptionDaura: number;
    maDauRa: number;
    maLoaiDauRa: number;
    maSanPham: number;
    constructor(o:number,d:number,l:number,s:number){
        this.maOptionDaura = o;
        this.maDauRa = d;
        this.maLoaiDauRa = l;
        this.maSanPham = s;
    }
}

export interface PhuThuoc {
    maOptionDaura: number,
    maDauRa: number,
    maLoaiDauRa: number,
    maSanPham: number
}
export interface SanPham {
    id: number;
    tenSanPham: string;
    moTa: string;
}

export interface LoaiDauRa {
    id: number;
    maSanPham: number;
    maLoaiDauRa: string;
    tenLoaiDauRa: string;
}

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

export interface DauRa {
    id: number;
    maDauRa: number;
    maLoaiDauRa: string;
    tenDauRa: string;
}