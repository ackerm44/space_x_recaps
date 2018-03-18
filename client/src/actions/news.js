export function newsFetchData(url) {
  return (dispatch) => {
    dispatch(newsIsLoading(true));

    fetch(url)
      .then((response) => {
        dispatch(newsIsLoading(false));

        return response
      })
      .then(response => response.json())
      .then(news => dispatch(newsFetchDataSuccess(news.articles)))
      .catch(() => dispatch(newsHasErrored(true)))
  }
}

export function newsHasErrored(bool) {
  return {
    type: 'NEWS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function newsIsLoading(bool) {
  return {
    type: 'NEWS_IS_LOADING',
    isLoading: bool
  }
}

export function newsFetchDataSuccess(news) {
  return {
    type: 'NEWS_FETCH_DATA_SUCCESS',
    news
  }
}
