import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class OptionService {
    
    constructor(private api: ApiService){}

    url = {
        list: "OptionDauRa/get-all-option-dau-ra",
    }

    list(dauraId:number, loaidauraId:number):Observable<any>{
        return this.api.list(`${environment.apiUrl}${this.url.list}`+"?MaDauRa="+dauraId+"&MaLoaiDauRa="+loaidauraId+"&MaSanPham=1");
    }
}