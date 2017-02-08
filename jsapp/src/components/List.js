import React, { Component } from 'react'

export default class List extends Component {

  render() {
    return (
      <div className='row'>
        <div className='list'>
        { this.props.list.title }
        </div>
      </div>
    );
  }
}
