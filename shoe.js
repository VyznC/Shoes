let images = document.querySelectorAll(".slider img");
console.log(images);
let mainImage = document.querySelector(".mainImg");
let lbtn = document.querySelector(".leftbtn");
let cbtn = document.querySelector(".center");
let rbtn = document.querySelector(".rightbtn");
let Popup = document.querySelector(".Popup");
let badge = document.querySelector(".badge");

images.forEach((images) => {
  images.addEventListener("click", (e) => {
    let src = e.target.src;
    let className = e.target.className;

    if (className == "active") {
    } else {
      document.querySelector(".slider img.active").classList.remove("active");
      e.target.className = "active";
      mainImage.src = src;
    }
  });
});
let value = 0;

lbtn.addEventListener("click", () => {
  if (value < 1) {
    value;
  } else {
    --value;
  }
  cbtn.innerHTML = value;
});

rbtn.addEventListener("click", () => {
  ++value;
  cbtn.innerHTML = value;
});

function addToCart() {
  let current = value;
  badge.innerHTML = current;
  value = 0;
  cbtn.innerHTML = value;
  addanime();
  setTimeout(() => {
    clearAnime();
  }, 2000);
}

function clearAnime() {
  Popup.style.transform = "translateY(200px)";
  Popup.style.transition = ".5s";
  setTimeout(() => {
    Popup.style.display = "none";
  }, 1000);
}

function addanime() {
  Popup.style.display = "block";
  setTimeout(() => {
    Popup.style.transform = "translateY(-200px)";
    Popup.style.transition = ".5s";
  }, 500);
}
