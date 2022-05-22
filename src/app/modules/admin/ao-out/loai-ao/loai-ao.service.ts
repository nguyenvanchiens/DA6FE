import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class LoaiAoService {
    
    constructor(private api: ApiService){}

    url = {
        list: "",
    }

    list(level: number):Observable<any>{
        return this.api.item(`${environment.apiUrl}${this.url.list}`,level);
    }
}