import React, { FunctionComponent } from "react";
import MainResultItem from "./MainResultItem";
import "../styles/MainResult.css";
import MyButton from "./UI/button/MyButton";

interface MainResultProps {
    credit:number;
    mainPayment: number;
    totalPercentPayment: number;
    setIsDetails: (value: boolean) => void;
}
 
const MainResult: FunctionComponent<MainResultProps> = ({credit, mainPayment, totalPercentPayment, setIsDetails}) => {


    return ( 
        <div className="myMainResult">
            <div className="myMainResultwrapper">
                {/* Сумма кредита */}
                <MainResultItem title="Сумма кредита" money={credit} currency="BYN" />

                {/* ежемесячный платёж */}
                <MainResultItem title="Ежемесячный платёж" money={mainPayment} currency="BYN" />

                {/* общая сумма выплат по кредиту */}
                <MainResultItem title="Общая сумма выплат" money={credit + totalPercentPayment} currency="BYN" />

                {/* общая сумма переплаты по кредиту */}
                <MainResultItem title="Общая сумма переплаты" money={totalPercentPayment} currency="BYN" />
            </div>

            <div className="buttonDiv">
                {/* кнопка "Детали расчёта" */}
            <MyButton onClick={setIsDetails}>Детали расчёта</MyButton>
            </div>
            
        </div>
     );
}
 
export default MainResult;