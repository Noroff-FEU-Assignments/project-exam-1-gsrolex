const detailContainer = document.querySelector(".blogpost")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(queryString)
console.log(params)
console.log(id);

const url = "https://block.wowgold.one/wp-json/wp/v2/posts/" + id;

console.log(url);

async function makeApiCall() {

    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts)

        createHTML(posts);
    }

    catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

makeApiCall();

function createHTML(posts) {
    document.title = posts.title.rendered;
    detailContainer.innerHTML = `
                                 <h1 class"h_one_blog">${posts.title.rendered}</h1>
                                 <p class"blogcont">${posts.content.rendered}</p>
                                 `
}



