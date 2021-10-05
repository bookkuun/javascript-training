async function callApiAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.log(users);
}

callApiAsyncAwait();

function callApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
    });
}

callApi();
