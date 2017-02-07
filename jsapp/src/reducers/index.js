import { combineReducers } from 'redux'
import boards from './boards.js'
import lists from './lists.js'

export default combineReducers({
  boards,
  lists
})
