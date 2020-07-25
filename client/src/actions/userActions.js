export function fetchUsers() {
    return (dispatch) => {
      dispatch({type: 'START_FETCHING_USERS_REQUEST'})
      fetch(`/users`, {
        credentials: "include",
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(json => {
          if (json.error){
            console.log("couldn't fetch users")
          } else {
            dispatch({ type: 'ADD_USERS', users: json})
          }
        })
    }
  }