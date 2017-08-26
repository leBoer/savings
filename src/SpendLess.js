import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { TiThumbsUp, TiThumbsDown } from 'react-icons/lib/ti';

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
        <Tips />
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
            value={expenditure.amount}
            onChange={(e) => onChangeHandler(e, id)}
            onChangeComplete={onChangeCompleteHandler}
          />
        </div>
      </div>
    )
  }
}

class Tips extends Component {
  learnMore(){
    window.open('https://en.wikipedia.org/wiki/The_Richest_Man_in_Babylon_(book)', '_blank')
  }
  thumbsUp() {
    console.log('We are glad you enjoyed that')
    alert('We are glad you found this helpful')
  }
  render(){
    return(
      <div className="tips">
        <button onClick={this.learnMore}>
          Find ways to save
        </button>
        <Thumbs />
      </div>
    )
  }
}

class Thumbs extends Component {
  state = {
    showMe: false
  }
  
  onClick = () => {
    this.setState(() => ({
      showMe: true
    }))
  }

  render() {
    if(this.state.showMe) {
      return(
        <div className="feedback">
          <p>Thank you for your feedback</p>
        </div>
      )
    } else {
      return(
        <div className="feedback">
          <p>Was this helpful?</p>
          <TiThumbsUp
            onClick={this.onClick}
          />
          <TiThumbsDown
            onClick={this.onClick}
          />
        </div>
      )
    }
  }
}

export default SpendLess