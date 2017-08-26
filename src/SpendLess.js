import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SpendLess extends Component {
  render(){
    const { expenditures, onChangeHandler, onChangeCompleteHandler, savings } = this.props
    return(
      <div className="spend_less">
        <h1>SPEND LESS</h1>
        <p>Try reducing your monthly spending to see how your forecast could improve!</p>
        {expenditures.map((expenditure) => (
          <Adjustment
            key={expenditure.name}
            expenditure={expenditure}
            onChangeHandler={onChangeHandler}
            onChangeCompleteHandler={onChangeCompleteHandler}
          />
        ))}
        <strong>This means you're saving £{savings} per month</strong>
      </div>
    )
  }
}

class Adjustment extends Component {
  render(){
    const { expenditure, onChangeHandler, onChangeCompleteHandler } = this.props
    let id = expenditure.name
    return(
      <div className="expenditure">
        <div className="expenditure_label">
          <p>{expenditure.name}</p>
        </div>
        <div className="slider">
          <Slider
            min={0}
            max={2000}
            key={expenditure.name}
            value={expenditure.amount}
            onChange={(e) => onChangeHandler(e, id)}
            onChangeComplete={onChangeCompleteHandler}
          />
        </div>
      </div>
    )
  }
}

export default SpendLess