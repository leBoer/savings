import React, { Component } from 'react';

class SpendLess extends Component {
  render(){
    const { expenditures, onChangeHandler } = this.props
    return(
      <div className="spend_less">
        <h1>SPEND LESS</h1>
        <p>Try reducing your monthly spending to see how your forecast could improve!</p>
        {expenditures.map((expenditure) => (
          <Slider
            key={expenditure.name}
            expenditure={expenditure}
            onChangeHandler={onChangeHandler}
          />
        ))}
        <div className="slider_name"></div>
      </div>
    )
  }
}

class Slider extends Component {
  render(){
    const { expenditure, onChangeHandler } = this.props
    return(
      <div className="expenditure">
        <div className="expenditure_label">
          <p>{expenditure.name}</p>
        </div>
        <div className="slider">
          <input
            type="range"
            min={0}
            max={2000}
            id={expenditure.name}
            value={expenditure.amount}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    )
  }
}

export default SpendLess