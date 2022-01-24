import React, { Component } from 'react';
import Counter from './Counter';

const Buttons = ({ increment, decrement, count }) => (
    <div style={{background: '#FFF', padding: '10px' }}>
        <h1>Counter: {count}</h1>
        <div>
            <button onClick={increment}>+ 1</button>
        </div>
        <div>
            <button onClick={decrement}>- 1</button>
        </div>
    </div>
)

class RenderProps extends Component {
    render(){
        return(
            <div style={{background: '#000', padding: '10px' }}>
                <Counter render={
                    ({increment, decrement, count}) => (
                        <Buttons
                            increment={increment}
                            decrement={decrement}
                            count={count}
                        />
                    )
                }>
                </Counter>
            </div>
        )
    }
}

export default RenderProps;