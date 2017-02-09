import { combineReducers } from 'redux'
import boards from './boards.js'
import lists from './lists.js'
import items from './items.js'

export default combineReducers({
  boards,
  lists,
  items
})
