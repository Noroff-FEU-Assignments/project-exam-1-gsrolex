const url = "https://block.wowgold.one/wp-json/wp/v2/posts?per_page=100&_embed";


async function getBlogs() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();

        console.log("response", response);
        createHTML(getResults);
    }

    catch (error) {
        console.log(error);
        document.querySelector("#blog-posts").innerHTML = message("error", error);
    }
}

getBlogs();

function createHTML(posts) {
    const blogContainer = document.querySelector("#blog-posts-page");
    blogContainer.innerHTML += `<div class="pro">`;
    posts.forEach(function (posts, index) {
        console.log(posts);
        blogContainer.innerHTML +=

            `<h4 clss"h_one_blog">${posts.title.rendered}</h4>
            <a href="../html/posts.html?id=${posts.id}"><img class="carousel__photo${index === 0 ? " initial" : ""}" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt=""></a>
            
            `;
    })

    blogContainer.innerHTML += `</div>`;

    start(document);
}



