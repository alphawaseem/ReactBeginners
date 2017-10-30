import React, { Component } from 'react';
import { Header } from './Header';
import { Order } from './Order';
import { Inventory } from './Inventory';
import { Fish } from "./Fish";

export class App extends Component {

  state = {
    fishPreview: ''
  }

  onFishFormSubmit = (fish) => {
    this.setState({
      fishPreview : ''
    });
    console.log('adding ', fish);
  }

  onInputChange = (fishState) => {
    this.setState({ fishPreview: fishState });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
          {this.state.fishPreview ? <div>
            <h3>Preview</h3>
            <Fish details={this.state.fishPreview} />
          </div> : ''}

        </div>
        <Order />
        <Inventory onFishFormSubmit={this.onFishFormSubmit} onInputChange={this.onInputChange} />
      </div>
    )
  }
}

export default App;