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

function callApiXML() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    console.log(xhr.response);
  };
}

callApiXML();
