import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };
    
    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    function (a) {
        let x = 0;
        x > 2 ? 'It is greater than two' : 'lesser than two' 
        
    }

    render() { 
        return (
        <div>
            <img src = {this.state.imageUrl} alt ="Minimal image"/>
            <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </div>
        );
    }

    formatCount () {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;