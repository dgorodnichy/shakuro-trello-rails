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
        <h3>
          { this.props.board.title }
        </h3>
        {this.props.lists.map((list) =>
          <List list={list} board={this.props.board} items={this.props.items} key={list.id}/>
        )}
      </div>
    );
  }
}
