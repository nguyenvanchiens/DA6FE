import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilterModel } from "../models/filter.model";
import { map } from 'rxjs/operators';
import { ResponseStatus } from "../enums/response-status.enum";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getList(url:string,filter: FilterModel):Observable<any>{
        return this.http.post<any>(url,filter).pipe(
            map((data:any)=>{
                if(data != null){
                    return data;
                }
                return null;
            })
        );
    }

    insert(url:string, model:any):Observable<any>{
        return this.http.post<any>(url,model).pipe(
            map((data:any)=>{
                if(data != null){
                    return data;
                }
                return null;
            })
        )
    }

    update(url, model:any):Observable<any>{
        return this.http.put<any>(url,model).pipe(
            map((data:any)=>{
                if(data != null){
                    return data;
                }
                return null;
            })
        )
    }

    delete(url:string, id:number):Observable<any>{
        return this.http.get<any>(url+"/"+id).pipe(
            map((data:any)=>{
                if(data != null){
                    return data;
                }
                return null;
            })
        )
    }

    item(url:string, id:number):Observable<any>{
        return this.http.get<any>(url+"/"+id).pipe(
            map((data:any)=>{
                if(data != null){
                    return data;
                }
                return null;
            })
        )
    }
}