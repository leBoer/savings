import React, { Component } from 'react';

class IncomeSpend extends Component {
  render() {
    const { incomes, expenditures } = this.props
    return (
      <div className="card">
        <div className="incomeSpend">
          <div className="header">
            <h2>YOUR INCOME & SPEND</h2>
          </div>
          <div className="income">
            <h3>Annual Income</h3>
            {incomes.map((income) => (
              <Input key={income.name} value={income} />
            ))}
          </div>
          <div className="expenditure">
            <h3>Monthly Spending</h3>
            {expenditures.map((expenditure) => (
              <Input key={expenditure.name} value={expenditure} />
            ))}
          </div>
        </div>
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
          <div className="amount-block">
            <label>
              {value.name}:
            </label>
            <input
              type="string"
              value={'£' + value.amount}
              onChange={this.handleChange}
            />
          </div>
          <div className="age-block">
            <label>
              From age:
            </label>
            <input
              type="number"
              value={value.from_age}
              onChange={this.handleChange}
            />
          </div>
          <div className="age-block">
            <label>
              To age:
            </label>
            <input
                type="number"
                value={value.to_age}
                onChange={this.handleChange}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default IncomeSpend