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
    ],
    "savings": 0
  }

  changeHandler = (event) => {
    const expenditures = this.state.expenditures
    const incomes = this.state.incomes
    let savings = this.state.savings

    const indexOfExpenditure = expenditures.findIndex(i => i.name === event.target.id)
    expenditures[indexOfExpenditure].amount = parseInt(event.target.value, 10)
    let totExp = 0
    let totInc = 0
    for (const expenditure of expenditures) {
      totExp += expenditure.amount
    }
    for (const income of incomes) {
      totInc += income.amount // This is in case we expand to other sources of income
    }
    savings = (totInc / 12) - totExp
    
    this.setState((state) => ({
      expenditures,
      savings
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
            savings ={this.state.savings}
            onChangeHandler={this.changeHandler}
          />
      </div>
    );
  }
}

export default App;
