import React, { Component } from 'react';
import IncomeSpend from './IncomeSpend'
import './App.css';

class App extends Component {
  state = {
    "incomes": [
      {
        "amount": 45300,
        "from_age": 30,
        "to_age": 67,
        "frequency": "annual",
        "name": "Annual salary"
      }
    ],
    "expenditures": [
      {
        "amount": 1199,
        "from_age": 30,
        "to_age": 65,
        "frequency": "monthly",
        "name": "Mortgage"
      },
      {
        "amount": 1199,
        "from_age": 30,
        "to_age": 65,
        "frequency": "monthly",
        "name": "Bills"
      },
      {
        "amount": 1199,
        "from_age": 30,
        "to_age": 65,
        "frequency": "monthly",
        "name": "General spending"
      }
    ]
  }
  render() {
    return (
      <div className="App">
          <IncomeSpend
            incomes={this.state.incomes}
            expenditures={this.state.expenditures}
          />
      </div>
    );
  }
}

export default App;
