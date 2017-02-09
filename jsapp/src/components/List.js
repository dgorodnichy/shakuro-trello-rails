import React, { Component } from 'react'

export default class List extends Component {

  render() {
    return (
      <div className='row'>
        <div className='list'>
          <ul>
            { this.props.list.title }
            { this.props.items.map((item) =>
              <li key={item.id}>
                {item.title}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
