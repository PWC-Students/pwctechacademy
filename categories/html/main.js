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
      {
        id: "article4",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "4.1",
      },
      {
        id: "article5",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "3.7",
      },
      {
        id: "article6",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "5.0",
      },
      {
        id: "article7",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "3.0",
      },
      {
        id: "article8",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "2.0",
      },
      {
        id: "article9",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "4.0",
      },
      {
        id: "article10",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "5.0",
      },
      {
        id: "article11",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "2.0",
      },
      {
        id: "article12",
        title: "AHAHAHAHAH",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/23/2023",
        read_min: "13 minutes read",
        popularity: "2.0",
      },
    ],
  },
};

const popular = document.querySelector(".glide__slides__popular");
const html = document.querySelector(".glide__slides__html");

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

const filteredData = blogs.html.articles.filter(
  (item) => item.popularity >= 4.0 && item.popularity <= 5.0
);

articleMap(
  popular,
  filteredData.sort((a, b) => b.popularity - a.popularity)
);

articleMap(
  html,
  blogs.html.articles.sort(
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
dragSlide(html);

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
