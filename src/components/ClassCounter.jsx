import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor (props){
    super()
    this.state ={count: 0}
  }

  HandleIncrease =()=>{
    this.setState({count:this.state.count + 1});
  }

  HandleDecrease =()=>{
    this.setState({count:this.state.count - 1});
  }

  render() {
    return (
      <div className='classbox'>
        <h1>Class Component : {this.state.count}</h1>
        <button onClick={this.HandleIncrease}>Increase Count</button>
        <button onClick={this.HandleDecrease}><span>Decrease Count</span></button>
      </div>
    );
  }
}

export default ClassCounter;



