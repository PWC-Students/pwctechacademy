await fetch("../../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    const articleArray = [];
    Object.values(data).forEach((key) => {
      articleArray.push(...key.articles);
    });

    const popularHtml = document.querySelector(".glide__slides__popularHtml");
    const htmlCategory = document.querySelector(".glide__slides__htmlCategory");
    const popularCss = document.querySelector(".glide__slides__popularCss");
    const cssCategory = document.querySelector(".glide__slides__cssCategory");
    const popularJavascript = document.querySelector(
      ".glide__slides__popularJavascript"
    );
    const javascriptCategory = document.querySelector(
      ".glide__slides__javascriptCategory"
    );

    function subArticleMap(data, sortType) {
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
    var path = window.location.pathname;

    console.log(path);

    if (path === "/categories/html/") {
      const filteredDataHtml = data.html.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularHtml,
        filteredDataHtml.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        htmlCategory,
        data.html.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/css/") {
      const filteredDataCss = data.css.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularCss,
        filteredDataCss.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        cssCategory,
        data.css.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/javascript/") {
      const filteredDataJavascript = data.javascript.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularJavascript,
        filteredDataJavascript.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        javascriptCategory,
        data.javascript.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    }
  });
