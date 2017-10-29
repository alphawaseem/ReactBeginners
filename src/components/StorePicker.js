import React, { Component } from 'react';


class StorePicker extends Component {
  render(){
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Enter a store name" />
        <button type="submit">Visit the store -></button>
      </form>
    )
  }
}

export default StorePicker;