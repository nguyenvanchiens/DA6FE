import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class KieuNepService {
    
    constructor(private api: ApiService){}

    url = {
        list: "Type/GetAllKieuNep",
    }

    list():Observable<any>{
        return this.api.list(`${environment.apiUrl}${this.url.list}`);
    }
}