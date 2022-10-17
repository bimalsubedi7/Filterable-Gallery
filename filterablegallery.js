let list = document.querySelectorAll(".list");
let galleryImg = document.querySelectorAll(".gallery-img");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < galleryImg.length; k++) {
      galleryImg[k].classList.remove("active");
      galleryImg[k].classList.add("hide");

      if (
        galleryImg[k].getAttribute("data-filter") == dataFilter ||
        dataFilter == "all"
      ) {
        galleryImg[k].classList.add("active");
        galleryImg[k].classList.remove("hide");
      }
    }
  });
}
