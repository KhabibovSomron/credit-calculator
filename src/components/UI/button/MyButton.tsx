import React, { FunctionComponent } from "react";
import classes from "./MyButton.module.css";
interface MyButtonProps {
    onClick: (value: boolean) => void;
}
 
const MyButton: FunctionComponent<MyButtonProps> = ({children, onClick}) => {

    function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
        onClick(true);
    }

    return ( 
        <button className={classes.myButton} onClick={clickHandler}>
            {children}
        </button>
     );
}
 
export default MyButton;