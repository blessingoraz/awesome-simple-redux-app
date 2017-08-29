
export function fetchTags (url) {
  return (dispatch) => {
    dispatch(getFetchTags())
    return fetch(url)
      .then((res) => { return res.text()})
      .then((data) => { 
        const result = JSON.parse(data);
        dispatch(setFetchTags({ tags: result.items }))
      })
      .catch((err) => {
        console.log('An error has occured', err);
      })
  }
}

const getFetchTags = () => {
  return {
    type: "GET_FETCHED_TAGS",
  }
}

const setFetchTags = ({ tags }) => {
  return {
    type: "SET_FETCHED_TAGS",
    tags
  }
}