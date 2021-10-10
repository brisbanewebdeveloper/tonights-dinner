import React, { Component } from 'react';
import { Food } from './Data';

type Props = {
  food: Food;
};

class FoodItem extends Component<Props> {
  render() {
    return (
      <div className="list-group-item">
        {this.props.food.name}
      </div>
    );
  }
}

export default FoodItem;
