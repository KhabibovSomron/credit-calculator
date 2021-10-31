import React, { FunctionComponent, useMemo } from "react";
import "../styles/MainResultItem.css"
import { splitMoney } from "../utils/calculations";

interface MainResultItemProps {
    title: string;
    money: number;
    currency: string;
}
 
const MainResultItem: FunctionComponent<MainResultItemProps> = ({title, money, currency}) => {

    const splitedMoney: string[] = useMemo(() => {
        return splitMoney(money)
    }, [money]);

    return ( 
        <div className="wrapper">
            <h1 className="titleH1">{title}</h1>
            <h1 className="moneyH1">{splitedMoney[0]}{splitedMoney.length > 1 ? <span>.{[splitedMoney[1][0],splitedMoney[1][1]]}</span> : <span></span>} {currency}</h1>
        </div>
     );
}
 
export default MainResultItem;