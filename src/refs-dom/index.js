import React, { useEffect, useRef, useState } from "react";

function RefsDom(){

    const inputRef = useRef();
    const count = useRef(1);
    const [ , setValue] = useState(false)

    const handleClick = () => {
        inputRef.current.focus()
        console.log('inputRef.current: ', inputRef.current)
    }

    useEffect(() => {
        setTimeout(() => {
            // Doesn't change the counter: useful for comparing data
            console.log('It loads only this');
            count.current = 300;
            // Only changes the counter if using setState to force it
            setValue(true);
        }, 3000)
    })

    return(
        <>
            <p>Count: {count.current} </p>
            Click the button to focus: <input ref={inputRef} />
            <div>
                <button onClick={handleClick}>Focus</button>
            </div>
        </>
    )
}

export default RefsDom