import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Login } from "./login.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    url = {
        login: 'Authentication/Login'
    };

    constructor(private http: HttpClient) { }

    login(model: Login): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}${this.url.login}`, model).pipe(
            map((data: any) => {
                if (data) {
                    return data;
                }
                else {
                }
            })
        );
    }
}