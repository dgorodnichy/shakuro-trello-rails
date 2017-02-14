import React, { Component } from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import styles from '../styles/List.css'
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.showForm = this.showForm.bind(this);

    this.state = {
      showForm: false,
      newItemTitle: "",
      newItemDescription: "",
    };
  }

  // itemTitle(title) {
  //   if (title.length <= 30) return title;

  //   return `${title.substring(0, 30)}...`;
  // }

  getItems(listId) {
    return this.props.listItems.filter((item) => listId == item.list_id);
  }

  handleChangeTitle(event) {
    this.setState({newItemTitle: event.target.value})
  }

  handleChangeDescription(event) {
    this.setState({newItemDescription: event.target.value})
  }

  showForm() {
    this.setState({showForm: true})
  }

  addItem() {
    this.props.saveItem(this.props.board.id, this.props.list.id);
    this.setState({
      newItemTitle: "",
      newItemDescription: "",
      showForm: false,
    })
  }

  hideForm() {
    this.setState({
      showForm: false,
      newItemTitle: "",
      newItemDescription: "",
    })
  }

  render() {
    const list = this.props.list || {};
    const items = this.getItems(list.id);

    return (
      <div className='list'>
        <Panel header={list.title}>
          {items.map(item => (
            <Panel collapsible
              header={item.title}
              key={item.id}>
              {item.description}
            </Panel>
          ))}
          <form className={`new-item-form-${list.id}`} method='POST'>
            <FormControl
              type='text'
              placeholder='Add item...'
              value={this.state.newItemTitle}
              name='item[title]'
              onChange={this.handleChangeTitle}
              onFocus={this.showForm}
            />
           { this.state.showForm ? (
             <div className='new-item-actions'>
               <FormControl
                 componentClass="textarea"
                 name='item[description]'
                 onChange={this.handleChangeDescription}
                 placeholder="textarea"
                 value={this.state.newItemDescription}
               />
               <Button onClick={this.hideForm.bind(this)}>Cancel</Button>{" "}
               <Button onClick={this.addItem.bind(this)}>Add</Button>
             </div>
           ) : (null)}
          </form>
        </Panel>
      </div>
    );
  }
}
