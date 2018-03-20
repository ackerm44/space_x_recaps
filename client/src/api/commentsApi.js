class CommentsApi {
  static postComment(postedComment) {
    const request = new Request('/api/comments', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({comment: postedComment})
    })

    return fetch(request)
      .then(response => {return response.json()})
      .catch(error => {return error})
  }
}

export default CommentsApi
