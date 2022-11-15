import React, { Component } from 'react';

class Counter extends Component {
    state ={
        value: this.props.value,
    };
    
    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }
    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement}
            className='btn btn-secondary btn-sm'>Increment</button>
        </div>
        );

    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount () {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;