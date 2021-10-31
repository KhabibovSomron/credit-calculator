import { ILoan } from "../types/types";
export const splitMoney = (money: number) => {
    return money.toString().split('.');
}

/* 
Аннуитетный график
При аннуитетном способе расчета основной долг по платежу разбивается на неравные части
Подсчет процентов по такому кредиту ведется в 2 этапа.

1. Определяется размер ежемесячного платежа (x) по следующей формуле: x = S * (P + (1 / ((1 + P)^N - 1)));
Здесь S — сумма займа, P — 1/100 доля процентной ставки (в месяц), N — срок кредитования (в месяцах).

2. Вычисляется доля процентов (I) в ежемесячном взносе по формуле:  I = S * P;
S - сумма займа, P - 1/100 доля процентной ставки (в месяц); например 12 % годовых  P = 12/100/12 = 0,01;
*/

function getLastDayOfMonth(year: number, month:number) {
    let date = new Date(year, month, 0);
    return date.getDate();
  }

export function countLoan(money: number, term: number, interestRate:number) {
    let result: ILoan[] = [];

    let S: number = money; // сумма кредита
    let P: number = (interestRate/100) / 12;
    let x: number = S * (P + (P / ((1 + P) **term - 1))); // ежемесячный платеж

    let now = new Date();
    let day:number = now.getDate();
    let month: number = now.getMonth() + 1;
    let year: number = now.getFullYear();
  
    for(let i = 0; i < term; i++) {

        let I: number = S * P; // Процентная часть или платёж по процентам
        let mainPayment: number = x - I;  // платёж по основному долгу
        S = S - mainPayment; // остаток по телу кредита после данного платежа 

        // генерация даты 
        let lastDay:number;

        month++
        if (month > 12) {
            year++;
            lastDay = getLastDayOfMonth(year, month - 1);
            month = 1;
        } else {
            lastDay = getLastDayOfMonth(year, month - 1);
        }
        if(day === lastDay) {
            day =  getLastDayOfMonth(year, month);
        }
        
        let date: string[] = [];

        if (day < 10) {
            date.push([0,day].join(''));
        } else {
            date.push(day.toString());
        }

        if(month < 10) {
            date.push([0, month].join(''));
        } else {
            date.push(month.toString());
        }

        date.push(year.toString());
        

        let obj: ILoan = {
            id: i + 1,
            date: date.join('.'),
            percentPayment: I,
            mainPayment: mainPayment,
            totalPayment: x,
            loanBalance: S
        }
        result.push(obj);
    }
    return result;
}
// Расёт общей суммы переплат по кредиту
export function totalPercentPaymentCount(loanArray: ILoan[]) {
    let result: number = 0;
    for (let i = 0; i < loanArray.length; i++) {
        result += loanArray[i].percentPayment;
    }
    return result;
}