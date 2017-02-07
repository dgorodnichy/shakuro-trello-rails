export function getBoardLists(boardId) {
  return function(dispatch) {
    fetch(`http://0.0.0.0:3000/boards/${boardId}/lists`)
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        dispatch({
          type: "GET_BOARD_LISTS",
          payload: json
        })
      })
  }
}
