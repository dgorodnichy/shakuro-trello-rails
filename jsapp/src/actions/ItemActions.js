export function getListItems(boardId, listId) {
  return function(dispatch) {
    fetch(`http://0.0.0.0:3000/boards/${boardId}/lists/${listId}/items`)
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
