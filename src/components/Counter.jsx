import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment=()=>{
        this.setState({
            count:this.state.count + 1
        })
        
        
    }
    decrement=()=>{
        this.setState({
            count:this.state.count - 1
        })
    }
  render() {
    return (
      <div>
        <center>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        </center>
      </div>
    )
  }
}

export default Counter