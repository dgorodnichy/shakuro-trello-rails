import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as BoardActions from '../actions/BoardActions.js';
import * as ListActions from '../actions/ListActions.js';
import * as ItemActions from '../actions/ItemActions.js';
import { connect } from 'react-redux';
import Board from '../components/Board.js';
import BoardsTabs from '../components/BoardsTabs.js';
import MainNabar from '../components/MainNavbar.js';

class App extends Component {

  isCurrentBoard(element, index, array) {
    if (element.id == this.props.params.boardId) {
      return element;
    }
  }

  componentWillMount() {
    this.props.boardActions.getBoards();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.boards.length == 0 && nextProps.boards.length > 0) {
      this.props.listActions.getBoardLists(this.props.params.boardId || nextProps.boards[0].id)
      this.props.itemActions.getBoardItems(this.props.params.boardId || nextProps.boards[0].id)
      hashHistory.replace(`/board/${this.props.params.boardId || nextProps.boards[0].id}`);
    }
  }

  render() {

    const board = this.props.boards.find(this.isCurrentBoard.bind(this)) || {}

    return (
      <div>
        <MainNabar />
        <BoardsTabs boards={this.props.boards} currentTab={this.props.params.boardId}/>
        <Board board={board}
               lists={this.props.lists}
               listItems={this.props.listItems}
               getBoardLists={this.props.listActions.getBoardLists}
               getBoardItems={this.props.itemActions.getBoardItems} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boards: state.boards,
    lists: state.lists,
    listItems: state.listItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    boardActions: bindActionCreators(BoardActions, dispatch),
    listActions: bindActionCreators(ListActions, dispatch),
    itemActions: bindActionCreators(ItemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
