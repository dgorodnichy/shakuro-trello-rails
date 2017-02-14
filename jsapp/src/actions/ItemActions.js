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

export function saveItem(boardId, listId) {

  return function(dispatch) {

    var form = document.querySelector(`.new-item-form-${listId}`);

    fetch(`http://0.0.0.0:3000/boards/${boardId}/lists/${listId}/items`, {
        method: "POST",
        body: new FormData(form)
      })
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        dispatch({
          type: "SAVE_ITEM",
          payload: json
        })
      })
  }
}
