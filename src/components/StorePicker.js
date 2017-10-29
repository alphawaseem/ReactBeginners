import React, { Component } from 'react';
import { getFunName } from '../helpers';
import { Redirect } from 'react-router-dom';

class StorePicker extends Component {

  state = {
    to: ''
  }

  render() {
    return this.state.to ? <Redirect to={this.state.to} /> :
      <form onSubmit={this.visitStore} className="store-selector" >
        <h2>Please Enter A Store</h2>
        <input ref={(input) => { this.input = input }} type="text" required placeholder="Enter a store name" defaultValue={getFunName()} />
        <button type="submit">Visit the store -></button>
      </form >
  }



  visitStore = (event) => {
    event.preventDefault();
    this.setState({
      to: '/store/' + this.input.value
    });
  }

}

export default StorePicker;