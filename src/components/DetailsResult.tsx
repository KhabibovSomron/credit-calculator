import React, { FunctionComponent } from "react";
import { ILoan } from "../types/types";
import "../styles/DetailsResult.css"
import TableItem from "./TableItem";

interface DetailsResultProps {
    loanArray: ILoan[];
    details: boolean
}
 
const DetailsResult: FunctionComponent<DetailsResultProps> = ({loanArray, details}) => {

    return ( 
        <div className={ details ? "myDetailsResult myDetailsResult-active"  : "myDetailsResult"}>
            <table className="myTable">
                <tbody>
                    <tr>
                        <th>№</th>
                        <th>Дата</th>
                        <th>Платёж</th>
                        <th>Проценты</th>
                        <th>Тело кредита</th>
                        <th>Остаток</th>
                    </tr>
                    {loanArray.map((item: ILoan) =>
                        <tr key={item.id}>
                            <td>{ item.id }</td>
                            <td>{ item.date }</td>
                            <TableItem money={item.mainPayment + item.percentPayment}/>
                            <TableItem money={item.percentPayment} />
                            <TableItem money={item.mainPayment} />
                            <TableItem money={item.loanBalance} />
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
     );
}
 
export default DetailsResult;