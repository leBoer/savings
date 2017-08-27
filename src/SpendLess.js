import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { TiThumbsUp, TiThumbsDown } from 'react-icons/lib/ti';

class SpendLess extends Component {
  render(){
    const { expenditures, onChangeHandler, onChangeCompleteHandler, savings } = this.props
    return (
      <div className="card">
        <div className="spend_less">
          <div className="header">
            <h2>SPEND LESS</h2>
          </div>
          <p>Try reducing your monthly spending to see how your forecast could improve!</p>
          {expenditures.map((expenditure) => (
            <Adjustment
              key={expenditure.name}
              expenditure={expenditure}
              onChangeHandler={onChangeHandler}
              onChangeCompleteHandler={onChangeCompleteHandler}
            />
          ))}
          <b>This means you're saving £{savings} per month</b>
          <Tips />
        </div>
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
        <div className="expenditure-label">
          <div className="expenditure-name">
            <b>{expenditure.name}</b>
          </div>
        </div>
        <div className="slider">
          <Slider
            min={0}
            max={2000}
            value={expenditure.amount}
            tooltip={false}
            onChange={(e) => onChangeHandler(e, id)}
            onChangeComplete={onChangeCompleteHandler}
          />
        </div>
        <div className="expenditure-amount">
          <p>£{expenditure.amount}</p>
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
    const thumbsStyleUp = {
      marginTop: "7px",
    }
    const thumbsStyleDown = {
      marginTop: "7px"
    }
    if(this.state.showMe) {
      return(
        <div className="feedback">
          <p>Thank you for your feedback</p>
        </div>
      )
    } else {
      return(
        <div className="feedback">
          <div className="question">
            <p>Was this helpful?</p>
          </div>
          <div className="thumbs">
            <TiThumbsUp
              onClick={this.onClick}
              size={40}
              style={thumbsStyleUp}
            />
            <TiThumbsDown
              onClick={this.onClick}
              size={40}
              style={thumbsStyleDown}
            />
          </div>
        </div>
      )
    }
  }
}

export default SpendLess