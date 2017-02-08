import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BoardsTabs extends Component {

  render() {
    return (
      <div className='row'>
        <div className='board'>
          <ul>
            {this.props.boards.map((board) =>
              <li key={board.id}>
                <Link to={`/board/${board.id}`}>{board.title}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
