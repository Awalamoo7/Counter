import React, { Component } from 'react';

class Counter extends Component {
    state ={
        value: this.props.counter.value,
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
            className='btn btn-secondary btn-sm'>
                Increment
            </button>
            <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm m-2'>
                Delete
            </button>
            
        </div>
        );

    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.value === 0) ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount () {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;