class SessionApi {
  static login(credentials) {
    const request = new Request('/api/user_token', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;


// login () {
//     const email = $("#email").val()
//     const password = $("#password").val()
//     const request = {"auth": {"email": email, "password": password}}
//     console.log(request)
//     $.ajax({
//       url: "http://localhost:3000/api/user_token",
//       type: "POST",
//       data: request,
//       dataType: "json",
//       success: function (result) {
//         console.log(result)
//
//       }
//     })
//   }
