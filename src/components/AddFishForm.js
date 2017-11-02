import React, { Component } from 'react';

export class AddFishForm extends Component {

  emptyState = {
    name: '',
    price: '',
    status: 'available',
    desc: '',
    image: ''

  }
  state = this.emptyState;

  onSubmit = (event) => {
    event.preventDefault();
    
    this.props.onFishFormSubmit(this.state);
    this.setState(this.emptyState);
  }

  onInputChange = (event) => {
    let key = event.target.name;
    let state = { ...this.state };
    state[key] = event.target.value;
    this.props.onInputChange(state);
    this.setState(state);
  }

  render() {
    return (
      <form ref={(form) => { this.fishForm = form }} onSubmit={this.onSubmit} className="fish-edit">
        <input type="text" placeholder="Fish Name" name="name" value={this.state.name} onChange={this.onInputChange} />
        <input type="text" placeholder="Fish Price" name="price" value={this.state.price} onChange={this.onInputChange} />
        <select placeholder="Fish Status" value={this.state.status} name="status" onChange={this.onInputChange} >
          <option value="available" name="status" onChange={this.onInputChange}>Fresh</option>
          <option value="unavailable" name="status" onChange={this.onInputChange}>Sold Out!</option>
        </select>
        <textarea type="text" placeholder="Fish Description" name="desc" value={this.state.desc} onChange={this.onInputChange} />
        <input type="text" placeholder="Fish Image" name="image" value={this.state.image} onChange={this.onInputChange} />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;