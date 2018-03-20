class CommentsApi {
  static postComment(comment) {
    const request = new Request('/api/comments', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    return fetch(request)
      .then(response => {return response.json()})
      .catch(error => {return error})
  }
}

export default CommentsApi
