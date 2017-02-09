import { combineReducers } from 'redux';
import boards from './boards.js';
import lists from './lists.js';
import listItems from './listItems.js';

export default combineReducers({
  boards,
  lists,
  listItems,
});
