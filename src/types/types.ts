export interface ISelect {
    value: string;
    title: string;
}

export interface IData {
    Date: string;
    Value: number;
}

export interface ILoan {
    id: number;
    date: string;
    percentPayment: number;
    mainPayment: number;
    totalPayment: number;
    loanBalance: number;
}