import React from "react";


const Square = ({value, onClick}) => {
    const style = value ? `square ${value}` : `square`;
    console.log({value});
    console.log({style});
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

export default Square;