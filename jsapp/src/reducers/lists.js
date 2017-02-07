export default function lists(state = [], action) {

  switch (action.type) {
    case "GET_BOARD_LISTS":
      return action.payload
    default:
      return state;
  }

}
