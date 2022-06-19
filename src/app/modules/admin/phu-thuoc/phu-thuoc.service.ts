import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";
import { PhuThuoc } from "./phu-thuoc.model";

@Injectable({
    providedIn: 'root'
})

export class PhuThuocService {
    
    constructor(private api: ApiService){}

    url = {
        insert: "PhuThuoc/create-phu-thuoc",
        delete: "PhuThuoc/delete-phu-thuoc"
    }

    Create(model: PhuThuoc[]):Observable<any>{
        return this.api.insert(`${environment.apiUrl}${this.url.insert}`,model);
    }

    Delete(dauraId:number, loaidauraId:number):Observable<any>{
        return this.api.delete(`${environment.apiUrl}${this.url.delete}`+"?dauraId="+dauraId+"&loaidauraId="+loaidauraId+"&sanphamId=1")
    }
}