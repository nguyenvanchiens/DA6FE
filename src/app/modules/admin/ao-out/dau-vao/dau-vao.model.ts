export interface DauVao{
    id: number,
    tenOptionDauRa: string,
    type: number,
    input: Input,
}

export interface Input {
    id: number;
    value: string;
}