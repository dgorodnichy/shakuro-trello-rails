import React, { Component } from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import styles from '../styles/List.css'

export default class List extends Component {

  itemTitle(title) {
    if (title.length <= 30) return title;

    return `${title.substring(0, 30)}...`;
  }

  getItems(listId) {
    return this.props.listItems.filter((item) => listId == item.list_id);
  }

  render() {
    const list = this.props.list || {};
    const items = this.getItems(list.id);

    return (
      <div className='list'>
        <Panel header={list.title}>
          {items.map(item => (
            <Panel collapsible
              header={this.itemTitle(item.title)}
              key={item.id}>
              {item.description}
            </Panel>
          ))}
        </Panel>
      </div>
    );
  }
}
