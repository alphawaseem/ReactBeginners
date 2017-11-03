import React, { Component } from 'react';
import { Header } from './Header';
import { Order } from './Order';
import { Inventory } from './Inventory';
import { Fish } from "./Fish";
import base from '../base';

export class App extends Component {

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.baseRef);
  }

  componentWillMount() {
    this.baseRef = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
    let localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  state = {
    fishPreview: '',
    order: {},
    fishes: {}
  }

  addToOrder = (key) => {
    let order = this.getStateCopy().order;
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  getStateCopy() {
    return { ...this.state };
  }

  onFishFormSubmit = (fish) => {
    this.setState({
      fishPreview: ''
    });
    let newFishes = { ...this.state.fishes, [`fish-${Date.now()}`]: fish };
    this.setState({
      fishes: newFishes
    });
  }

  onInputChange = (fishState) => {
    this.setState({ fishPreview: fishState });
  }

  updateFish = (key, updatedFish) => {
    let fishes = { ...this.state.fishes }
    fishes[key] = updatedFish;
    this.setState({ fishes })
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
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory updateFish={this.updateFish} fishes={this.state.fishes} onFishFormSubmit={this.onFishFormSubmit} onInputChange={this.onInputChange} />
      </div>
    )
  }
}

export default App;