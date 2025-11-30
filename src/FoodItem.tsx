import React, { Component } from 'react';
import { Food } from './Data';

type Props = {
  food: Food;
};

class FoodItem extends Component<Props> {
  render() {
    return (
      <div className="px-4 py-2 border-b border-gray-200 last:border-b-0">
        {this.props.food.name}
      </div>
    );
  }
}

export default FoodItem;
