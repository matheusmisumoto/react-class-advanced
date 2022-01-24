import React from "react";
import PropTypes from "prop-types";

function PetShop(props) {

    const { dogs, cats, customers, customerName, onClick, status } = props;

    return(
        <div>
            <h1>Animals</h1>
                <p>Dogs: {dogs}</p>
                <p>Cats: {cats}</p>
            <h2>Number of customers: {customers.length}</h2>
                <p>Customer name: {customerName}</p>
            <button onClick={onClick}>Do something!</button>
        </div>
    )
}

// PetShop.defaultProps = {
//     dogs: 1,
//     cats: 0,
//     customers: [],
//     customerName: ''
// }


PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customerName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['in progress', 'completed'])
}

export default PetShop