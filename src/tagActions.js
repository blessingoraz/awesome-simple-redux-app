
export const fetchTags = (url) => {
  return (dispatch) => {
    dispatch(getFetchTags())
    return fetch(url)
      .then((res) => { return res.text() })
      .then((data) => { 
        const result = JSON.parse(data);
        dispatch(setFetchTags({ tags: reresult.itemss }))
      })
      .catch((err) => {
        console.log('An error has occured', err);
      })
  }
}

getFetchTags = () => {
  return {
    type: "GET_FETCHED_TAGS",
  }
}

setFetchTags = ({ tags }) => {
  return {
    type: "SET_FETCHED_TAGS",
    tags
  }
}