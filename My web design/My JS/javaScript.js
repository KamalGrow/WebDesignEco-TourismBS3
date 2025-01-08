// owl API
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// from Contact
const scriptURL = "https://script.google.com/macros/s/AKfycbzdQkaA55dJaZ9KiMBCbt842zT3vLHygc5MR1xG4X-jaoOH_ayyLDy9fBseavpZcivhfQ/exec";
const form = document.forms["contact-from"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset fromnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Close Nav
const myLink = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".navbar-toggler");
const offCanvas = document.querySelector(".offcanvas");

// ketika nav link di klik, nav nya close
myLink.forEach((myLink) => {
  myLink.addEventListener("click", () => {
    document.querySelector(".hidden")?.classList.remove("hidden");
    myLink.classList.add("hidden");
  });
});

// ketika navbar nya di klik dimana aja, nav nya close

// ketika di close atau di open backdrop nya hilang

// My Main GSAP
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, EaselPlugin);
  // gsap code here!

  const showAnim = gsap
    .from(".navbar", {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    })
    .progress(2);

  ScrollTrigger.create({
    start: "top",
    end: "max",
    markers: false,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
});
