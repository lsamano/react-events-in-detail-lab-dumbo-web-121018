import React from 'react';
export default class CoordinatesButton extends React.Component {
 //Props = onReceiveCoordinates
  renderCoordinates = event => {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return (
      <button onClick={this.renderCoordinates}> </button>
    )
  }
}
