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

// My GASP Animation
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  gsap.registerPlugin(TextPlugin, EaselPlugin, CustomEase, EasePack, ScrollTrigger);
  gsap.from(".btn", {
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
    delay: 1.5,
    x: -1000,
  });
  ("elastic.out(1, 0.3)");
  gsap.from(".winggle", {
    scrollTrigger: {
      trigger: ".winggle",
      toggleActions: "restart play  reverse  resume",
    },
    duration: 2,
    ease: "back.out(1.7)",
    y: 250,
  });
  gsap.to(".texts", { duration: 2, delay: 0.4, text: "Selamat datang di Ekowisata Kabupaten Bogor" });
});
