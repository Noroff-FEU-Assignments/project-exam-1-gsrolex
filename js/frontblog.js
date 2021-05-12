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
    const blogContainer = document.querySelector("#blog-posts");
    blogContainer.innerHTML += `<div class="pro">
    <div class="carousel-wrapper">
    <div class="carousel-wrapper">
    <div class="carousel">`;
    posts.forEach(function (posts, index) {
        console.log(posts);
        blogContainer.innerHTML +=

            `<a href="../html/posts.html?id=${posts.id}"><img class="carousel__photo${index === 0 ? " initial" : ""}" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt=""></a>
            <div class="car">${posts.date}"</div>
            `;
    })

    blogContainer.innerHTML += `<div class="carousel__button--next"></div>
                  <div class="carousel__button--prev"></div>
                </div>
              </div>                                    
                                        </div>`;

    initializeCarousel(document);
}





function displayCarousel(data) {
    console.log("data inside display function....", data);
    for (var i = 0; i < data.length; i++) {
        var img_url = _spPageContextInfo.webAbsoluteUrl + '' + data[i].ServerRelativeUrl;
        var img_div = '<div class="mySlides fade"><img src="' + img_url + '"> </div>';
        $("#slideshow-container").append(img_div);
    }
}

function initializeCarousel(d) {
    // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    var itemClassName = "carousel__photo";
    items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;

    // To initialise the carousel we'll want to update the DOM with our own classes
    function setInitialClasses() {

        // Target the last, initial, and next items and give them the relevant class.
        // This assumes there are three or more items.
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    // Set click events to navigation buttons

    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
    function disableInteraction() {
        moving = true;

        setTimeout(function () {
            moving = false
        }, 500);
    }

    function moveCarouselTo(slide) {

        // Check if carousel is moving, if not, allow interaction
        if (!moving) {

            // temporarily disable interactivity
            disableInteraction();

            // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;

            // Test if carousel has more than three items
            if ((totalItems - 1) > 3) {

                // Checks if the new potential slide is out of bounds and sets slide numbers
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)) {
                    oldNext = 0;
                }

                // Check if current slide is at the beginning or end and sets slide numbers
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems - 1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }

                // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

                // Based on the current slide, reset to default classes.
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                // Add the new classes
                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    // Next navigation handler
    function moveNext() {

        // Check if moving
        if (!moving) {

            // If it's the last slide, reset to 0, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }

            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Previous navigation handler
    function movePrev() {

        // Check if moving
        if (!moving) {

            // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Initialise carousel
    function initCarousel() {
        setInitialClasses();
        setEventListeners();

        // Set moving to false now that the carousel is ready
        moving = false;
    }

    // make it rain
    initCarousel();

};