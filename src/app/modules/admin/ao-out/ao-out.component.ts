import { Component, OnInit, ViewChild } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FilterModel } from 'src/app/core/models/filter.model';
import { TaiLieu } from '../tai-lieu/tai-lieu.model';
import { AoOutService } from './ao-out.service';
import { DauRaComponent } from './dau-ra/dau-ra.component';
import { DauVaoComponent } from './dau-vao/dau-vao.component';
import { KetQuaComponent } from './ket-qua/ket-qua.component';
import { LoaiDauRaComponent } from './loai-dau-ra/loai-dau-ra.component';

@Component({
  selector: 'app-ao-out',
  templateUrl: './ao-out.component.html',
  styleUrls: ['./ao-out.component.css']
})
export class AoOutComponent implements OnInit {
  @ViewChild(LoaiDauRaComponent) loaidaura: LoaiDauRaComponent;
  @ViewChild(DauRaComponent) daura: DauRaComponent;
  @ViewChild(DauVaoComponent) option: DauVaoComponent;
  @ViewChild(KetQuaComponent) ketqua: KetQuaComponent
  filter = new FilterModel();
  listOfData: readonly TaiLieu[] = [];
  sanphamId = "1";
  loaidauraId = "";
  dauraId = "";
  optionId = "";

  fileStorage: File;
  current = 0;
  index = 1;

  pre(): void {
    this.current -= 1;
    if (this.index < 4) {
      this.index += 1
    }
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    if (this.index > 0) {
      this.index += 1
    }
    this.changeContent();
  }

  async done() {
    let version = await this.generateFineName(this.fileStorage.name)
    const fileToBlob = new Blob([new Uint8Array(await this.fileStorage.arrayBuffer())], {type: this.fileStorage.type });
    const new_file = new File([fileToBlob], version, {
      type: fileToBlob.type,
    });
    console.log(new_file)
    this.notifi.success("THÔNG BÁO","Đã thêm mẫu tài liệu mới vào kho dữ liệu!")
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        if (this.loaidaura != undefined) {
          this.loaidauraId = this.loaidaura.defaultSelectedLoaiDauRa;
        }
        break;
      }
      case 2: {
        this.index = 3;
        if (this.daura != undefined) {
          this.dauraId = this.daura.defaultSelectedDauRa;
        }
        break;
      }
      case 3: {
        this.index = 4;
        const data = this.option.listOfData;
        let obj = Object();
        data.forEach(item => {
          let key = this.replaceString(item.tenOptionDauRa)
          obj[key] = item.selectValue
        })
        this.aoApi.download("TCKT-C_PS1.doc").subscribe((data:any)=>{
          if(data){
            this.fileStorage = new File([data], "TCKT-C_PS1.doc", {
              type: data.type,
            });
            this.ketqua.showTaiLieu(this.fileStorage)
          }
        })
        break;
      }
      default: {
        this.index = 0;
      }
    }
  }

  constructor(
    private aoApi: AoOutService,
    private notifi: NzNotificationService
  ) { }

  ngOnInit(): void {
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

  async generateFineName(filename: string){
    let name = filename.replace(/[.doc 0-9]/g,'')
    this.filter.keyword = name;
    let files = await this.aoApi.list(this.filter).toPromise();
    this.listOfData = files.items
    let max_version = this.listOfData.reduce(function(accumulator, element){
      let prev = accumulator.tenFile.replace(/[^0-9]/g, '');
      let next = element.tenFile.replace(/[^0-9]/g, '');
      return (prev > next) ? accumulator : element
    });
    let v = max_version.tenFile.replace(/[^0-9]/g, '')
    let vs = (+v)+1
    return name+vs+".doc";
  }
}
