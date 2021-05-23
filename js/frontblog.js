const url = "https://block.wowgold.one/wp-json/wp/v2/posts?per_page=100&_embed";


const carouselContainer = document.querySelector(".carousel_box");

async function getLatestPosts() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        displayCarousel(results);
        console.log(results);
    }
    catch (error) {
        console.log(error);
    }
}

getLatestPosts()

function displayCarousel(post) {

    for (let i = 0; i < post.length; i++) {

        if (i === 5) {
            break;
        }
        carouselContainer.innerHTML += `<a href="../html/posts.html?id=${post[i].id}" class="carousel">
                                            <section>
                                            <img class="carousel-image" src="${post[i]._embedded['wp:featuredmedia']['0'].source_url}">
                                                <div class="farge">
                                                    <h3 class="carousel-text">${post[i].title.rendered}</h3>
                                                </div>
                                            </section>
                                        </a>
                                    </div>`
    }
}

let sliderIndex = 0;

function arrowLeft() {
    sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 4;
    carouselContainer.style.transform = "translate(" + (sliderIndex) * -20 + "%)";
}

function arrowRight() {
    sliderIndex = (sliderIndex < 4) ? sliderIndex + 1 : 0;
    carouselContainer.style.transform = "translate(" + (sliderIndex) * -20 + "%)";
}

