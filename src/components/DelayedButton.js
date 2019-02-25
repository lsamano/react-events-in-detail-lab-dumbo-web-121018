import React from 'react';

export default class DelayedButton extends React.Component {
  //Props: onDelayedClick (a function), and delay (a number)
  clickEventHandler = event => {
    return setTimeout(() => {
      event.persist()
      return this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  render() {
    return (
      <button onClick={this.clickEventHandler}></button>
    )
  }
}
