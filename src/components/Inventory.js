import React, { Component } from 'react';
import { AddFishForm } from "./AddFishForm";

export class Inventory extends Component {
  render(){
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm onInputChange={this.props.onInputChange} onFishFormSubmit={this.props.onFishFormSubmit} />
      </div>
    )
  }
}

export default Inventory;