const blogs = {
  html: {
    id: "category1",
    title: "HTML",
    articles: [
      {
        id: "article1",
        title: "Semantic HTML: What It Is and How to Use It Correctly",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
        popularity: "4.3",
      },
      {
        id: "article2",
        title: "A Beginners Guide to HTML5 - PWCTechademy Blog",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/27/2023",
        read_min: "13 minutes read",
        popularity: "4.5",
      },
      {
        id: "article3",
        title: "Why Do I Need to Use Semantic HTML Tags?",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "5.0",
      },
    ],
  },
  css: {
    id: "category2",
    title: "CSS",
    articles: [
      {
        id: "article1",
        title: "A Beginners Guide to CSS - PWCTechademy Blog",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
        popularity: "1.5",
      },
      {
        id: "article2",
        title: "The CSS Handbook: A Handy Guide to CSS for Developers",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
        popularity: "5.0",
      },
      {
        id: "article3",
        title: "Partial CSS Guide for Busy Developers - PWCTechademy Blog",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
        popularity: "3.0",
      },
    ],
  },
};

const popular = document.querySelector(".glide__slides__popular");
const recent = document.querySelector(".glide__slides__recent");

// converts object into an array
const articleArray = [];
Object.values(blogs).forEach((key) => {
  articleArray.push(...key.articles);
});

function articleMap(data, sortType) {
  data.innerHTML = sortType
    .map(
      (article) =>
        `
    <li class="glide__slide">
    <h5> ${article.date_created} ·  ${article.read_min}</h5>
    <h1>${article.title}</h1>
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

articleMap(
  popular,
  articleArray.sort((a, b) => b.popularity - a.popularity)
);
articleMap(
  recent,
  articleArray.sort(
    (a, b) => new Date(b.date_created) - new Date(a.date_created)
  )
);

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
dragSlide(recent);

function slider(data) {
  console.log(data);
  const slide = document.querySelector(".glide__slide");
  const nextButton = document.querySelector(".glide__next");
  const slideWidth = slide.clientWidth;
  data.scrollLeft += slideWidth * 3.1;
}
