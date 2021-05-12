const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params)

const id = params.get("id");

console.log(id);

