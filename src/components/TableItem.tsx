import React, { FunctionComponent, useMemo } from "react";
import { splitMoney } from "../utils/calculations";
import "../styles/TableItem.css"

interface TableItemProps {
    money: number;
}
 
const TableItem: FunctionComponent<TableItemProps> = ({money}) => {

    const splitedMoney: string[] = useMemo(() => {
        if(money < 0.00001) {
            return ['0',]
        }
        return splitMoney(money)
    }, [money]);

    return ( 
        <td>
            {splitedMoney[0]}{splitedMoney.length > 1 ? 
            <span>.{[splitedMoney[1][0],splitedMoney[1][1]]}</span> : 
            <span></span>} 
        </td>
     );
}
 
export default TableItem;