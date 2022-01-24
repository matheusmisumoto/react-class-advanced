import React from "react";
import PropTypes from 'prop-types';
import PetShop from "./PetShop";

function PropTypeClass(){
    const doSomething = () => {
        alert('Okay, done!')
    }
    
    return(
        <PetShop
            dogs={2}
            cats={3}
            customers={['John', 'Jason', 'Jackson']}
            customerName={'Jackson'}
            onClick={doSomething}
            status={'completed'}
        />
    )
}

export default PropTypeClass
