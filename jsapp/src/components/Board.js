import React, { Component } from 'react'

export default class Board extends Component {

  componentWillUpdate(nextProps, nextState) {
    if(this.props.board.id != nextProps.board.id) {
      this.props.getBoardLists(nextProps.board.id)
    }
  }

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
