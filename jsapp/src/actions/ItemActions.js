export function getBoardItems(boardId, listId) {
  return function(dispatch) {
    fetch(`http://0.0.0.0:3000/board_items/${boardId}`)
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        dispatch({
          type: "GET_LIST_ITEMS",
          payload: json
        })
      })
  }
}
