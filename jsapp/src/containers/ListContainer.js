import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../actions/ItemActions.js';
import List from '../components/List.js'

class ListContainer extends Component {


  componentWillMount() {
    this.props.itemActions.getListItems(this.props.board.id, this.props.list.id)
  }

  render() {
    return (
      <div>
        <List items={this.props.items} board={this.props.board} list={this.props.list}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemActions: bindActionCreators(ItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
