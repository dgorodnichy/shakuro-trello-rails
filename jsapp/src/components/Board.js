import React, { Component } from 'react'
import List from '../components/List.js'

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
              <List list={list} />
            </li>
          )}
        </div>
      </div>
    );
  }
}
