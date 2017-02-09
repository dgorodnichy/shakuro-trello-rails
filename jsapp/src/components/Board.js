import React, { Component } from 'react'
import ListContainer from '../containers/ListContainer.js'

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
          {this.props.lists.map((list) =>
            <li key={list.id}>
              <ListContainer list={list} board={this.props.board} />
            </li>
          )}
        </div>
      </div>
    );
  }
}
