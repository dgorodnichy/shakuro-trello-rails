import React, { Component } from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import styles from '../styles/List.css'
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormControl from 'react-bootstrap/lib/FormControl';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

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

  getItems(listId) {
    return this.props.listItems.filter((item) => listId == item.list_id);
  }

  handleChangeTitle(event) {
    this.setState({newItemTitle: event.target.value})
  }

  handleChangeDescription(event) {
    this.setState({newItemDescription: event.target.value})
  }

  addItem() {
    this.props.saveItem(this.props.board.id, this.props.list.id);
    this.setState({
      newItemTitle: "",
      newItemDescription: "",
      showForm: false,
    })
  }

  editItem() {
    console.log('edit item');
  }

  removeItem() {
    console.log('remove item');
  }

  moveToList(itemId,listId) {
    this.props.changeItemList(itemId, listId)
  }

  hideForm() {
    this.setState({
      showForm: false,
      newItemTitle: "",
      newItemDescription: "",
    })
  }

  showForm() {
    this.setState({showForm: true})
  }

  render() {
    const list = this.props.list || {};
    const items = this.getItems(list.id);

    return (
      <div className='list'>
        <Panel header={list.title}>
          {items.map(item => (
            <div className='list-item'>
              <ButtonToolbar>
                <DropdownButton bsStyle={'link'} title={<Glyphicon glyph="option-vertical" />} key={1} id={`dropdown-basic-${1}`}>
                  <MenuItem eventKey="1" onClick={this.editItem}>Edit</MenuItem>
                  <MenuItem eventKey="2" onClick={this.removeItem}>Delete</MenuItem>
                  <MenuItem divider />
                  <MenuItem header>Move to</MenuItem>
                  { this.props.lists.filter((i) => i.id != this.props.list.id).map(list => (
                      <MenuItem eventKey="1" onClick={this.moveToList.bind(this, item.id, list.id)}>{list.title}</MenuItem>
                  )) }

                </DropdownButton>
              </ButtonToolbar>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
          <form className={`new-item-form-${list.id}`} method='POST'>
            <FormControl
              type='text'
              placeholder={ this.state.showForm ? 'Title' : 'Add item... ' }
              value={this.state.newItemTitle}
              name='item[title]'
              onChange={this.handleChangeTitle}
              onFocus={this.showForm}
            />
           { this.state.showForm ? (
             <div className='new-list-actions'>
               <FormControl
                 componentClass="textarea"
                 name='item[description]'
                 onChange={this.handleChangeDescription}
                 placeholder="Description"
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
