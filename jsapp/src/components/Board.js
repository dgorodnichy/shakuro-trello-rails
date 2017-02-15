import React, { Component } from 'react';
import List from '../components/List.js';
import Fade from 'react-bootstrap/lib/Fade';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import style from '../styles/Board.css';

export default class Board extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);

    this.state = {
      showForm: false,
      newListTitle: "",
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.board.id != nextProps.board.id) {
      this.props.getBoardLists(nextProps.board.id);
      this.props.getBoardItems(nextProps.board.id);
    }
  }

  showForm() {
    this.setState({showForm: true})
  }

  hideForm() {
    this.setState({
      showForm: false,
      newListTitle: "",
    })
  }

  addList() {
    this.props.saveList(this.state.newListTitle, 7);
  }

  handleChange(event) {
    this.setState({newListTitle: event.target.value})
  }

  render() {
    return (
      <div className='board'>
        <h3>{this.props.board.title}</h3>

        {this.props.lists.map((list) =>
          <List board={this.props.board}
            list={list}
            listItems={this.props.listItems}
            key={list.id}
            saveItem={this.props.saveItem}
            lists={this.props.lists}
            changeItemList={this.props.changeItemList} />

        )}
        <div className='list'>
          <Fade in={true}>
              <Well>
                <form className='new-list-form' method='POST'>
                  <FormControl
                    type='text'
                    placeholder='Add list...'
                    value={this.state.newListTitle}
                    name='list[title]'
                    onChange={this.handleChange}
                    onFocus={this.showForm}
                  />
                 { this.state.showForm ? (
                   <div className='new-list-actions'>
                     <Button onClick={this.hideForm.bind(this)}>Cancel</Button>{" "}
                     <Button onClick={this.addList.bind(this)}>Add</Button>
                   </div>
                 ) : (null)}
                </form>
              </Well>
          </Fade>
        </div>
      </div>
    );
  }
}
