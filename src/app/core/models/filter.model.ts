export class FilterModel{
    keyword: string;
    page: number;
    size: number;
    constructor(){
        this.keyword = "";
        this.page = 1;
        this.size = 100;
    }
}