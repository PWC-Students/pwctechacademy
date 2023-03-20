await fetch("/data/data.json")
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
    const popularReact = document.querySelector(".glide__slides__popularReact");
    const reactCategory = document.querySelector(
      ".glide__slides__reactCategory"
    );
    const popularNext = document.querySelector(".glide__slides__popularNext");
    const nextCategory = document.querySelector(".glide__slides__nextCategory");
    const popularLaravel = document.querySelector(
      ".glide__slides__popularLaravel"
    );
    const laravelCategory = document.querySelector(
      ".glide__slides__laravelCategory"
    );
    const popularPython = document.querySelector(
      ".glide__slides__popularPython"
    );
    const pythonCategory = document.querySelector(
      ".glide__slides__pythonCategory"
    );
    const popularJava = document.querySelector(".glide__slides__popularJava");
    const javaCategory = document.querySelector(".glide__slides__javaCategory");
    const popularPhp = document.querySelector(".glide__slides__popularPhp");
    const phpCategory = document.querySelector(".glide__slides__phpCategory");

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
    let path = window.location.pathname;

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
    } else if (path === "/categories/reactjs/") {
      const filteredDataReact = data.reactjs.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularReact,
        filteredDataReact.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        reactCategory,
        data.reactjs.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/nextjs/") {
      const filteredDataNext = data.nextjs.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularNext,
        filteredDataNext.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        nextCategory,
        data.nextjs.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/laravel/") {
      const filteredDataLaravel = data.laravel.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularLaravel,
        filteredDataLaravel.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        laravelCategory,
        data.laravel.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/python/") {
      const filteredDataPython = data.python.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularPython,
        filteredDataPython.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        pythonCategory,
        data.python.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/java/") {
      const filteredDataJava = data.java.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularJava,
        filteredDataJava.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        javaCategory,
        data.java.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    } else if (path === "/categories/php/") {
      const filteredDataPhp = data.php.articles.filter(
        (item) => item.popularity >= 4.0 && item.popularity <= 5.0
      );

      subArticleMap(
        popularPhp,
        filteredDataPhp.sort((a, b) => b.popularity - a.popularity)
      );

      subArticleMap(
        phpCategory,
        data.php.articles.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        )
      );
    }
  });
