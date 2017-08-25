import React, { Component } from 'react';
import IncomeSpend from './IncomeSpend'
import SpendLess from './SpendLess'
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

  changeHandler = (event) => {
    const expenditures = this.state.expenditures
    const indexOfExpenditure = expenditures.findIndex(i => i.name === event.target.id)
    expenditures[indexOfExpenditure].amount = event.target.value
    this.setState((state) => ({
      expenditures
    }))

  }

  render() {
    return (
      <div className="App">
          <IncomeSpend
            incomes={this.state.incomes}
            expenditures={this.state.expenditures}
          />
          <SpendLess
            expenditures={this.state.expenditures}
            onChangeHandler={this.changeHandler}
          />
      </div>
    );
  }
}

export default App;
