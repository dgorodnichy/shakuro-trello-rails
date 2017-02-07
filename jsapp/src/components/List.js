import React, { Component } from 'react'

export default class List extends Component {

  render() {
    return (
      <div className='row'>
        <div className='board'>
        { this.props.board.title }
        </div>
      </div>
    );
  }
}
