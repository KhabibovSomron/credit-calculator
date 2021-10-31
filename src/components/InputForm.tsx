import React, { FunctionComponent } from "react";
import MyInput from "./UI/input/MyInput";
import "../styles/InputForm.css";
import MySelect from "./UI/select/MySelect";
import { ISelect } from "../types/types";

interface InputFormProps {
    credit: number;
    setCredit: (num: number) => void;
    term: number;
    setTerm: (num: number) => void;
    interestRate: number;
    setInterestRate: (num: number) => void;
}

const InputForm: FunctionComponent<InputFormProps> = ({credit, setCredit, term, setTerm, interestRate, setInterestRate}) => {
    
    const loanTerm: ISelect[] = [
        {value: '1', title: '1 месяц'},
        {value: '3', title: '3 месяц'},
        {value: '6', title: '6 месяц'},
        {value: '12', title: '1 год'},
        {value: '24', title: '2 года'},
        {value: '60', title: '5 лет'}
    ];

    return(
        <div className="inputForm">
            {/* поля для ввода суммы кредита */}
            <MyInput title="Сумма кредита" value={credit} setValue={setCredit} /> 

            {/* поля для ввода процентной ставки по кредиту в % */}
            <MyInput title="Процентная ставка, % годовых" value={interestRate} setValue={setInterestRate} />

            {/* поля для выбора срока кредита */}
            <MySelect title="Срок кредита" items={loanTerm} value={term} setValue={setTerm} />
        </div>
    );
}

export default InputForm;