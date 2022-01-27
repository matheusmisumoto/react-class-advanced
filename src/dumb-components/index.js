import React, { useState } from "react";
import Button from "./Components/Button";
import Calc from "./Components/Calc";

function DumbComponents() {

    const [value, setValue ] = useState(0);
    const [min, setMin ] = useState(0);
    const [max, setMax ] = useState(30);

    const handleClick = () => {
        setMin(10);
    }

    const handleCalc = ({target}) => {
        const value = target.value;
        setValue(min + max + value);
    }

    return(
        <>
            <Button onClick={handleClick}>
                Add to cart
            </Button>
            <br />
            <h1>Total: {value}</h1>
            <Calc
                min={min}
                max={max}
                onChange={handleCalc}
            />
        </>
    )
}

export default DumbComponents