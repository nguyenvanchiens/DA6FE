export interface DauVao{
    id: number;
    tenOptionDauRa: string;
    type: number;
    input: InputOption[];
    selectValue: string;
}

export interface InputOption {
    label: string,
    value: string,
    groupLabel: string,
    createdDate: string;
}