import { slider, dragSlide } from "./utils.js";

await fetch("../../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    const articleArray = [];
    Object.values(data).forEach((key) => {
      articleArray.push(...key.articles);
    });

    const popular = document.querySelector(".glide__slides__popular");
    const recent = document.querySelector(".glide__slides__recent");
    const html = document.querySelector(".glide__slides__html");
    const css = document.querySelector(".glide__slides__css");
    const javascript = document.querySelector(".glide__slides__javascript");
    const reactjs = document.querySelector(".glide__slides__reactjs");
    const nextjs = document.querySelector(".glide__slides__nextjs");
    const laravel = document.querySelector(".glide__slides__laravel");
    const python = document.querySelector(".glide__slides__python");
    const java = document.querySelector(".glide__slides__java");
    const php = document.querySelector(".glide__slides__php");

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

    const filteredData = articleArray.filter(
      (item) => item.popularity >= 4.0 && item.popularity <= 5.0
    );

    articleMap(
      popular,
      filteredData.sort((a, b) => b.popularity - a.popularity)
    );

    articleMap(
      recent,
      articleArray.sort(
        (a, b) => new Date(b.date_created) - new Date(a.date_created)
      )
    );
    articleMap(html, data.html.articles);
    articleMap(css, data.css.articles);
    articleMap(javascript, data.javascript.articles);
    articleMap(reactjs, data.reactjs.articles);
    articleMap(nextjs, data.nextjs.articles);
    articleMap(laravel, data.laravel.articles);
    articleMap(python, data.python.articles);
    articleMap(java, data.java.articles);
    articleMap(php, data.php.articles);
  });

const popular = document.querySelector(".glide__slides__popular");
const recent = document.querySelector(".glide__slides__recent");
const html = document.querySelector(".glide__slides__html");
const css = document.querySelector(".glide__slides__css");
const javascript = document.querySelector(".glide__slides__javascript");
const reactjs = document.querySelector(".glide__slides__reactjs");
const nextjs = document.querySelector(".glide__slides__nextjs");
const laravel = document.querySelector(".glide__slides__laravel");
const python = document.querySelector(".glide__slides__python");
const java = document.querySelector(".glide__slides__java");
const php = document.querySelector(".glide__slides__php");

dragSlide(popular);
dragSlide(recent);
dragSlide(html);
dragSlide(css);
dragSlide(javascript);
dragSlide(reactjs);
dragSlide(nextjs);
dragSlide(laravel);
dragSlide(python);
dragSlide(java);
dragSlide(php);
