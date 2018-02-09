import React, { Component } from 'react';
import {observer, inject} from 'mobx-react'

@observer
class Counter extends Component {
  handleIncreament() {
    this.props.store.increamentCounter()
  }

  handleDecrement() {
    this.props.store.decrementCounter()
  }

  render() {
    const {counter} = this.props.store

    return (
      <div className="Counter">
         <h1>Counter Demo</h1>
         <h1>{counter}</h1>
         <button onClick={this.handleIncreament.bind(this)}>+</button>
         <button onClick={this.handleDecrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default Counter;
