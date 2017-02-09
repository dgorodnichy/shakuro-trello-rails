import React, { Component } from 'react';
import List from '../components/List.js';

export default class Board extends Component {
  componentWillUpdate(nextProps, nextState) {
    if (this.props.board.id != nextProps.board.id) {
      this.props.getBoardLists(nextProps.board.id);
      this.props.getBoardItems(nextProps.board.id);
    }
  }

  render() {
    return (
      <div className='row'>
        <h3>{this.props.board.title}</h3>

        {this.props.lists.map((list) =>
          <List board={this.props.board}
            list={list} listItems={this.props.listItems} key={list.id} />
        )}
      </div>
    );
  }
}
