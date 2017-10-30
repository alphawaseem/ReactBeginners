import React, { Component } from 'react';
import { Header } from './Header';
import { Order } from './Order';
import { Inventory } from './Inventory';
import { Fish } from "./Fish";
import sampleFishes from "../sample-fishes";
export class App extends Component {

  state = {
    fishPreview: '',
    fishes: sampleFishes
  }

  onFishFormSubmit = (fish) => {
    this.setState({
      fishPreview: ''
    });
    let newFishes = {...this.state.fishes,fish};
    this.setState({
      fishes : newFishes
    });
  }

  onInputChange = (fishState) => {
    this.setState({ fishPreview: fishState });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />

          <ul className="list-of-fishes">
            {this.state.fishPreview ? <div>
              <h3>Preview</h3>
              <Fish details={this.state.fishPreview} />
            </div> : ''}
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory onFishFormSubmit={this.onFishFormSubmit} onInputChange={this.onInputChange} />
      </div>
    )
  }
}

export default App;