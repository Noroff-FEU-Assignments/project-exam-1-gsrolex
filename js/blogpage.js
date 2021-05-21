const url = "https://block.wowgold.one/wp-json/wp/v2/posts?per_page=100&_embed";
var posts = [];
var maxPosts = 5;
var morePosts = 3;
var loadedPosts = 0;



async function getBlogs() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        getResults.forEach(function (res, i) {
            posts.push(res);
        })

        console.log("response", response);
        createHTML(posts);
    }

    catch (error) {
        console.log(error);
        document.querySelector("#blog-posts").innerHTML = message("error", error);
    }
}

getBlogs();

function createHTML(post) {
    const blogContainer = document.querySelector("#blog-posts-page");
    blogContainer.innerHTML += `<div class="pro">`;
    for (loadedPosts; loadedPosts <= maxPosts - 1; loadedPosts++) {
        blogContainer.innerHTML +=

            `<h4 clss"h_one_blog">${post[loadedPosts].title.rendered}</h4>
            <a href="../html/posts.html?id=${post[loadedPosts].id}"><img class="carousel__photo${loadedPosts === 0 ? " initial" : ""}" src="${post[loadedPosts]._embedded["wp:featuredmedia"][0].source_url}" alt=""></a>
            
            `;
    }

    blogContainer.innerHTML += `</div>`;
    start(document);
}


function load() {
    if (loadedPosts == posts.length || maxPosts == posts.length) {
        document.getElementById("load-more").innerHTML = "No more posts!";
        return false
    }
    maxPosts += morePosts;
    if (maxPosts > posts.length) {
        maxPosts = posts.length;
    }
    createHTML(posts);
}




