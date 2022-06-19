import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AoOutService {
    
    constructor(
        private http: HttpClient,
        ){}

    url = {
        download: "File/downloadfile",

    }

    download(tenfile:string):Observable<any>{
        return this.http.get(`${environment.apiUrl}${this.url.download}`+"?fileName=" +tenfile, {
            responseType: 'blob',
        }); 
    }
}