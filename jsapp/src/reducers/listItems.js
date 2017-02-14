export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_LIST_ITEMS':
      return action.payload;
    case "SAVE_ITEM":
      return [...state, action.payload]
    default:
      return state;
  }
}
