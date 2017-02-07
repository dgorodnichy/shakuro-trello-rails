import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as BoardActions from '../actions/BoardActions.js';
import * as ListActions from '../actions/ListActions.js';
import { connect } from 'react-redux';
import Board from '../components/Board.js';
import BoardsTabs from '../components/BoardsTabs.js';

class App extends Component {

  isCurrentBoard(element, index, array) {
    if(element.id == this.props.params.boardId){
      return element;
    }
  }

  componentWillMount() {
    this.props.boardActions.getBoards();
  }

  render() {

    const board = this.props.boards.find(this.isCurrentBoard.bind(this)) || {}
    const boards = this.props.boards;

    return (
      <div>
        App
        <BoardsTabs boards={boards} />
        <Board board={board} getBoardLists={this.props.listActions.getBoardLists} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boards: state.boards,
    lists: state.lists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    boardActions: bindActionCreators(BoardActions, dispatch),
    listActions: bindActionCreators(ListActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
