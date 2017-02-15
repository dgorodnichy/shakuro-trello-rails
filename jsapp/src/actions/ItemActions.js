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

export function changeItemList(itemId, listId) {

  console.log(itemId, listId);

  return function(dispatch) {
    fetch(`http://0.0.0.0:3000/items/${itemId}`, {
        method: "put",
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: "{'list_id': 'listId'}"
        })
    .then( (response) => {
      return response.json()
    })
    .then( (json) => {
      dispatch({
        type: "CHANGE_ITEM_LIST",
        payload: json
      })
    })
  }
}
