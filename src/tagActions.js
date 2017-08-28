export function fetTags(url) {
    return (dispatch) => {
      dispatch(getFetchTags())
      return fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(setFetchTags({ tags: res })))
        .catch((err) => {
          console.log('An error has occured', err);
        })
    }
  }
  
  function getFetchTags() {
    return {
      type: "GET_FETCHED_TAGS",
    }
  }
  
  function setFetchTags({ tags }) {
    return {
      type: "SET_FETCHED_TAGS",
      tags
    }
  }