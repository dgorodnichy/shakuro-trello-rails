import React, { Component } from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class BoardsTabs extends Component {

  handleSelect(selectedKey) {
    hashHistory.push(`/board/${selectedKey}`);
  }

  render() {
    return (
      <Nav bsStyle="pills" activeKey={this.props.currentTab} onSelect={this.handleSelect}>
        { this.props.boards.map((board) =>
          <NavItem eventKey={board.id.toString()} href={`/board/${board.id}`} key={board.id}>{board.title}</NavItem>
        )}
      </Nav>
    );
  }
}
