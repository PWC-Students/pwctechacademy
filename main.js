const blogs = [
  {
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
      },
      {
        id: "article2",
        title: "A Beginners Guide to HTML5 - PWCTechademy Blog",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
      },
      {
        id: "article3",
        title: "Why Do I Need to Use Semantic HTML Tags?",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
      },
    ],
  },
  {
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
      },
      {
        id: "article2",
        title: "The CSS Handbook: A Handy Guide to CSS for Developers",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
      },
      {
        id: "article3",
        title: "Partial CSS Guide for Busy Developers - PWCTechademy Blog",
        description: "This is sample data #1",
        author: "Keanu John Lariosa",
        author_profile: "https://i.ibb.co/FqRsSTg/profile-img1.jpg",
        date_created: "2/28/2023",
        read_min: "13 minutes read",
      },
    ],
  },
];

const articles = document.querySelector(".blog__articles");

articles.innerHTML = blogs
  .map(
    (blog) =>
      `
      <a href="" class=${blog.id}>
      <h1>${blog.title}</h1>
      <div>
      ${(articles.innerHTML = blog.articles
        .map(
          (articles) => `<div class=${articles.id}>
          <h5> ${articles.date_created} ·  ${articles.read_min}</h5>
          <h1>${articles.title}</h1>
          <img src=${articles.author_profile} alt="profile-image"/>
          <div>
          <p>${articles.author}</p>
          <p>Developer</p>
          </div>
      </div>
      `
        )
        .join(""))}
        </div>
        </a>
 `
  )
  .join("");
