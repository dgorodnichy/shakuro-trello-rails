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

export function saveList(title, boardId) {

  return function(dispatch) {

    var form = document.querySelector('.new-list-form');

    fetch(`http://0.0.0.0:3000/boards/${boardId}/lists`, {
        method: "POST",
        body: new FormData(form)
      })
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        dispatch({
          type: "SAVE_LIST",
          payload: json
        })
      })
  }
}
