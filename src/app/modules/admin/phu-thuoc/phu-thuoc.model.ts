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

