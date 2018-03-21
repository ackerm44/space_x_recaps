class CommentsApi {
  static postComment(postedComment) {
    const headers = new Headers()
    if (sessionStorage.jwt !== undefined) {
      headers.append("AUTHORIZATION", `Bearer ${sessionStorage.jwt}`)
    }
    headers.append('Content-Type', 'application/json')
    const request = new Request('/api/comments', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({comment: postedComment})
    })

    return fetch(request)
      .then(response => {return response.json()})
      .catch(error => {return error})
  }
}

export default CommentsApi
