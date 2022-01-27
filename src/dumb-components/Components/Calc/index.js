import React from "react";
import PropTypes from "prop-types"

function Calc(props) {
    const { min, max, onChange } = props;

    return(
        <div>
            <p>Minimum Value: {min}</p>
            <p>Maximum value: {max}</p>
            <input type="text" onChange={onChange}></input>
        </div>
    )
}

Calc.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Calc