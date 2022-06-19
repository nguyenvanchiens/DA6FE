import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilterModel } from "src/app/core/models/filter.model";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ChiTietService {
    
    constructor(
        private http: HttpClient,
        private api: ApiService
        ){}

    url = {
        list: "File/get-all-paging",
    }

    list(model: FilterModel):Observable<any>{
        return this.api.list(`${environment.apiUrl}${this.url.list}`+"?textSearch="+model.keyword);
    }
}