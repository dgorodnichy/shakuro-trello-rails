export function getBoards() {
  return function(dispatch) {
    fetch("http://0.0.0.0:3000/boards")
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
