// ES6から利用可能
//

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
