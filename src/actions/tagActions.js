import AT from './ActionTypes';

export function fetchTags (url) {
  return (dispatch) => {
    dispatch(getFetchTags())
    return fetch(url)
      .then((res) => { return res.text()})
      .then((data) => { 
        const result = JSON.parse(data);
        dispatch(setFetchTags({ tags: result.items }))
      })
      .catch((error) => {
        dispatch(setTagError({error: error}))
      })
  }
}

const getFetchTags = () => {
  return {
    type: AT.GET_FETCHED_TAGS,
  }
}

const setFetchTags = ({ tags }) => {
  return {
    type: AT.SET_FETCHED_TAGS,
    tags
  }
}

const setTagError = ({ error }) => {
  return {
    type: AT.SET_TAG_ERROR,
    error
  }
}