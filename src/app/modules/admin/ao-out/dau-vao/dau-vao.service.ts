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
        list: "LoaiDauRaDauRa/get-dau-ra-loai-dau-ra",
    }

    list(id: string):Observable<any>{
        return this.api.list(`${environment.apiUrl}${this.url.list}`+"?LoaiDauRa="+ id);
    }
}