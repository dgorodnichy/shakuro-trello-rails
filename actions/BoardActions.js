export function getBoards() {
  return function(dispatch) {
    fetch("http://0.0.0.0:8050/data/boards.json")
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        dispatch({
          type: "GET_BOARDS",
          payload: json
        })
      })
  }
}
