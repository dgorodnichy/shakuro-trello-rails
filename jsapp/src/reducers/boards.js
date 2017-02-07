export default function boards(state = [], action) {

  switch (action.type) {
    case "GET_BOARDS":
      return action.payload
    default:
      return state;
  }

}
