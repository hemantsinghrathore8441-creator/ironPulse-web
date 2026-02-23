var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");

  if (!header || !backToTop) {
    console.error("Required elements missing: check IDs");
    return;
  }

  let lastScrollY = window.scrollY;
  const scrollThreshold = 5;
  const showBtnAfter = 300;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + scrollThreshold) {
      header.classList.add("header-hide");
    } else if (currentScrollY < lastScrollY - scrollThreshold) {
      header.classList.remove("header-hide");
    }

    if (currentScrollY > showBtnAfter) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

    lastScrollY = currentScrollY;
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");

  if (height === "" || weight === "") {
    result.innerHTML = "Please enter height and weight!";
    return;
  }

  height = height / 100; // convert cm to meter
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1);

  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal weight";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  result.innerHTML = `${bmi} (${status})`;
}
