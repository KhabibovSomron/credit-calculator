import React, { FunctionComponent } from "react";
import classes from "./MyInput.module.css";

interface IMyInputProps {
    title: string;
    value: number;
    setValue: (num: number) => void;
}

const MyInput: FunctionComponent<IMyInputProps> = ({title, value, setValue}) => {

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if(Number(e.target.value) > 0) {
            setValue(Number(e.target.value));
        }
    }

    return(
        <div className={classes.myInputDiv}>
            <label>{title}</label>
            <input type="number" className={classes.myInput}  onChange={changeHandler} value={value} />
        </div>
        
    );
}

export default MyInput;