import React, { Component } from 'react';
import { hashHistory } from 'react-router';
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

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props);
    if (this.props.boards.length == 0 && nextProps.boards.length > 0) {
      this.props.listActions.getBoardLists(this.props.params.boardId || nextProps.boards[0].id)
      hashHistory.replace(`/board/${this.props.params.boardId || nextProps.boards[0].id}`);
    }
  }

  render() {

    const board = this.props.boards.find(this.isCurrentBoard.bind(this)) || {}
    const lists = this.props.lists

    return (
      <div>
        App
        <BoardsTabs boards={this.props.boards} />
        <Board board={board} lists={lists} getBoardLists={this.props.listActions.getBoardLists} />
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
