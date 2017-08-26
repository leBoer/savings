import React, { Component } from 'react';

class IncomeSpend extends Component {
  render() {
    const { incomes, expenditures } = this.props
    return (
      <div className="incomeSpend">
        <h1>YOUR INCOME & SPEND</h1>
        <h2>Annual Income</h2>
        {incomes.map((income) => (
          <Input key={income.name} value={income} />
        ))}
        <h2>Monthly Spending</h2>
        {expenditures.map((expenditure) => (
          <Input key={expenditure.name} value={expenditure} />
        ))}
      </div>
    )
  }
}

class Input extends Component {

  handleChange(event) {
  }

  render() {
    const { value } = this.props
    return(
      <div className="input">
        <form>
          <label>
            {value.name}:
            <input
              type="number"
              value={value.amount}
              onChange={this.handleChange}
            />
          </label>
          <label>
            From age:
            <input
              type="number"
              value={value.from_age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            To age:
            <input
              type="number"
              value={value.to_age}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default IncomeSpend