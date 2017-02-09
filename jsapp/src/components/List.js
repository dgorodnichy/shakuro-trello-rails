import React, { Component } from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import styles from '../styles/List.css'

export default class List extends Component {

  itemTitle(title) {
    if(title.length > 30) {
      return `${title.substring(0, 30)}...`
    } else {
      return title
    }
  }

  getItems(listId) {
    console.log(listId);
    console.log(this.props.list);
    return this.props.items.filter((item) => listId == item.list_id);
  }

  render() {
    const items = this.getItems(this.props.list.id)
    return (
      <div className='list'>
        <Panel header={this.props.list.title}>
          {
            items.map(item => (
              <Panel collapsible
                header={this.itemTitle(item.title)}
                key={item.id}>
                {item.description}
              </Panel>
            ))
          }
        </Panel>
      </div>
    );
  }
}
