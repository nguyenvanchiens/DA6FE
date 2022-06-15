import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class DauVaoService {
    
    constructor(private api: ApiService){}

    url = {
        list: "PhuThuoc/get-phu-thuoc-by-list-id",
    }

    list(madaura: number, maloaidaura: number):Observable<any>{
        return this.api.list(`${environment.apiUrl}${this.url.list}`+"?MaDauRa="+madaura+"&MaLoaiDauRa="+maloaidaura+"&MaSanPham=1");
    }
}