await fetch("../../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    const articleArray = [];
    Object.values(data).forEach((key) => {
      articleArray.push(...key.articles);
    });

    const popular = document.querySelector(".glide__slides__popular");
    const css = document.querySelector(".glide__slides__css");

    // converts object into an array

    function articleMap(data, sortType) {
      data.innerHTML = sortType
        .map(
          (article) =>
            `
    <li class="glide__slide">
    <div class="article__header">
    <h5> ${article.date_created} ·  ${article.read_min}</h5>
    <h1>${article.title}</h1>
    </div>
    <div class="article__author">
    <img src=${article.author_profile} alt="profile-image"/>
    <div>
    <p>${article.author}</p>
    <p>Developer</p>
    </div>
    </div>
    </li>
    `
        )
        .join("");
    }

    const filteredData = data.css.articles.filter(
      (item) => item.popularity >= 4.0 && item.popularity <= 5.0
    );

    articleMap(
      popular,
      filteredData.sort((a, b) => b.popularity - a.popularity)
    );

    articleMap(
      css,
      data.css.articles.sort(
        (a, b) => new Date(b.date_created) - new Date(a.date_created)
      )
    );
  });

const popular = document.querySelector(".glide__slides__popular");

//drag slide
function dragSlide(data) {
  let isDown = false;
  let start;
  let scrollLeft;

  data.addEventListener("mousedown", (e) => {
    isDown = true;
    data.classList.add("active");
    start = e.pageX - data.offsetLeft;
    scrollLeft = data.scrollLeft;
  });
  data.addEventListener("mouseleave", () => {
    isDown = false;
    data.classList.remove("active");
  });
  data.addEventListener("mouseup", () => {
    isDown = false;
    data.classList.remove("active");
  });
  data.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - data.offsetLeft;
    const walk = (x - start) * 3; //scroll-fast
    data.scrollLeft = scrollLeft - walk;
  });
}

dragSlide(popular);

function slider(data) {
  const slide = document.querySelector(".glide__slide");
  const nextButton = document.querySelector(".glide__next");
  const slideWidth = slide.clientWidth;
  data.scrollLeft += slideWidth * 3.1;
}

function show_hide() {
  var click = document.querySelector(".dropdown__content");
  if (click.style.display === "none") {
    click.style.display = "flex";
  } else {
    click.style.display = "none";
  }
}
