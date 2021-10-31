import React, { FunctionComponent } from "react";
import { ISelect } from "../../../types/types";
import classes from "./MySelect.module.css"

interface MySelectProps {
    title: string;
    items: ISelect[];
    value: number;
    setValue: (num: number) => void;
}
 
const MySelect: FunctionComponent<MySelectProps> = ({title, items, value, setValue}) => {

    function changeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        setValue(Number(e.target.value));
    }
    
    return (
        <div>
            <label>{title}</label>
            <select 
            className={classes.mySelect}
            onChange={changeHandler}
            value={value}
        >
            <option disabled value="">{title}</option>
            {items.map((item: ISelect, index: number) =>
             <option value={item.value} key={index}>{item.title}</option>
             )}
        </select>
        </div>
        
    );
}
 
export default MySelect;