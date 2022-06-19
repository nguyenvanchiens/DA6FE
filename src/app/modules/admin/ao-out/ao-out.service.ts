import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilterModel } from "src/app/core/models/filter.model";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AoOutService {
    
    constructor(
        private http: HttpClient,
        private api: ApiService
        ){}

    url = {
        download: "File/downloadfile",
        list: "File/get-all-paging",
    }

    download(tenfile:string):Observable<any>{
        return this.http.get(`${environment.apiUrl}${this.url.download}`+"?fileName=" +tenfile, {
            responseType: 'blob',
        }); 
    }

    list(model: FilterModel):Observable<any>{
        return this.api.list(`${environment.apiUrl}${this.url.list}`+"?textSearch="+model.keyword);
    }
}