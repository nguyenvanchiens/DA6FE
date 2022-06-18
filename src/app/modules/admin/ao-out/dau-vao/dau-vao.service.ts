import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class DauVaoService {

    constructor(private api: ApiService) { }

    url = {
        list: "PhuThuoc/get-phu-thuoc-by-list-id",
        option: "Type/GetAll"
    }

    list(madaura: number, maloaidaura: number): Observable<any> {
        return this.api.list(`${environment.apiUrl}${this.url.list}` + "?MaDauRa=" + madaura + "&MaLoaiDauRa=" + maloaidaura + "&MaSanPham=1");
    }

    input(tablename: string): Observable<any> {
        return this.api.list(`${environment.apiUrl}${this.url.option}` + this.replaceString(tablename));
    }

    replaceString(tablename: string): string {
        let result = tablename.replace(/\s/g, '');
        result = this.removeAccents(result)
        return result
    }

    removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }
}