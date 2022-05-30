import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ThanhPhanVaiMotService {
    
    constructor(private api: ApiService){}

    url = {
        list: "Type/GetAllThạnhPhanVaiMot",
    }

    list():Observable<any>{
        return this.api.dropDown(`${environment.apiUrl}${this.url.list}`);
    }
}