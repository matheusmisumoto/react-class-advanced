import React, { Fragment } from 'react';

const store = [{
        name: 'Product A',
        value: 10.99
    },
    {
        name: 'Product B',
        value: 49.99
    },
    {
        name: 'Product C',
        value: 250.00
    }];

function Column(props) {
    return(
        <tr>
            <td>{props.name}: </td>
            <td>{props.value}</td>
        </tr>        
    )
}

function Fragments() {

    const RenderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column name={element.name} value={element.value} />
        </Fragment>
    )

    // <React.Fragment>, <Fragment> (using import), or <>

    return(
        <table>
            <tbody>
                {store.map(RenderColumns)}
            </tbody>
        </table>
    )
}

export default Fragments;