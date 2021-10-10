
import React, { Component } from 'react';

// Load Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIcon } from './LoadFa';

import { Category, Food } from './Data';
import FoodItem from './FoodItem';

const iconRun = findIcon({prefix: 'fas', iconName: 'recycle'});

type Props = {
  category: Category;
  foods: Food[];
};
type State = {
  selecting: Boolean;
  selected: Food|null;
};

class FoodItems extends Component<Props, State> {

  // States; Not sure if they should be defined as State, as no one needs to refer externally
  state: State = {
    selecting: false,
    selected: null,
  };

  // Main Timer ID to start/stop selecting the food
  timerId: NodeJS.Timeout | null = null;
  // Timer ID to handle the animation
  timerIdSelect: NodeJS.Timeout | null = null;
  // Number of foods for the section
  foodLength: number = 0;

  /**
   * @inheritdoc
   */
  constructor(props: Props) {

    super(props);

    this.startSelecting = this.startSelecting.bind(this);
    this.selectFood = this.selectFood.bind(this);
    this.stopSelecting = this.stopSelecting.bind(this);
  }

  /**
   * Handler for when starting to choose the food
   * @returns <void>
   */
  startSelecting() {
    if (this.state.selecting) return false;
    this.foodLength = this.props.foods.length; // Not setting the value every time "selectFood()" is called
    this.timerId = setTimeout(this.stopSelecting, 2000);
    this.setState({ selecting: true });
    this.timerIdSelect = setInterval(this.selectFood, 50);
  }

  /**
   * Handler for when choosing the food
   * @returns <void>
   */
  selectFood() {
    // if (this.state.selecting) return false;
    const index = Math.floor(Math.random() * this.foodLength);
    const myFood = this.props.foods[index];
    this.setState({ selected: myFood });
  }

  /**
   * Handler for when finishing to choose the food
   * @returns <void>
   */
  stopSelecting() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.timerIdSelect) {
      clearTimeout(this.timerIdSelect);
      this.timerIdSelect = null;
    }
    this.setState({ selecting: false });
  }

  /**
   * @inheritdoc
   */
  render() {
    return (
      <div className="card">

        {
          <a
            className="card-header"
            href="#!"
            onClick={this.startSelecting}
          >
            <FontAwesomeIcon
              icon={iconRun}
            />
            <span>
              {this.props.category.name}
            </span>
          </a>
        }

        <div className="card-body">

          {
            (this.state.selecting || this.state.selected) &&
            <div className="list-group list-group-selected">
              <div
                className="list-group-item list-group-item-danger"
              >
                {this.state.selected?.name}
              </div>
            </div>
          }

          <div className="list-group">
            {this.props.foods.map((food: Food, key) => (
              <FoodItem
                key={key}
                food={food}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FoodItems;
