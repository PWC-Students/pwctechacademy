function slider(data) {
  const slide = document.querySelector(".glide__slide");
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
