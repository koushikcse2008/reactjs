import { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {counter: prevState.counter + 1}
         })
    }

    handleDecrement = () => {
        if(this.state.counter > 0 ) {
            this.setState(prevState => {
                return {counter: prevState.counter - 1}
            });

        }     
    }

    render() {
        return (
            <>
            <h3>Class Component</h3> <br />
            <p>Counter: <span className='text-danger'>{ this.state.counter }</span></p>
            <button onClick={this.handleIncrement} className='btn btn-success me-2'>Increment Counter</button>
            <button onClick={this.handleDecrement} className='btn btn-danger'>Decrement Counter</button>
            </>
        );
    }
}

export default Counter;


