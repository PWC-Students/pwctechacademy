export function slider(data) {
  const slide = document.querySelector(".glide__slide");
  const nextButton = document.querySelector(".glide__next");
  const slideWidth = slide.clientWidth;
  data.scrollLeft += slideWidth * 3.1;
}

export function show_hide() {
  var click = document.querySelector(".dropdown__content");
  if (click.style.display === "none") {
    click.style.display = "flex";
  } else {
    click.style.display = "none";
  }
}

//drag slide
export function dragSlide(data) {
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
