export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_LIST_ITEMS':
      return action.payload;
    default:
      return state;
  }
}
