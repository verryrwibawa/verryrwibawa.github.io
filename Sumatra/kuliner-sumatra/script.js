// --- Animate On Scroll ---
AOS.init({
  duration: 700,
  once: true,
  disable: "mobile",
});

// --- Dark Mode ---
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  $("body").addClass("dark-mode");
  $(".dark-mode-container").addClass("dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  $("body").removeClass("dark-mode");
  $(".dark-mode-container").removeClass("dark");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
  $("#checkbox").prop("checked", true);
}

// dark mode checked
$("#checkbox").change(function () {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// --- Change Navbar On Scroll ---
let lastY = 0;
let currentY = $(this).scrollTop();

if (currentY > 0) {
  $("nav").addClass("scrolled");
}

$(window).scroll(function (event) {
  lastY = currentY;
  currentY = $(this).scrollTop();
  if (currentY > lastY) {
    $("nav").addClass("scrolled");
    $(".daftar-isi").removeClass("scrolled");
    $(".info-lainnya").removeClass("scrolled");
  } else {
    $("nav").removeClass("scrolled");
    $(".daftar-isi").addClass("scrolled");
    $(".info-lainnya").addClass("scrolled");
  }
  lastY = currentY;
  if (currentY > 100) {
    $(".dark-mode-container").addClass("scrolled");
    $(".nav-link-wrapper").addClass("scrolled");
    $(".ball").removeClass("bg-light");
    $(".ball").addClass("bg-secondary");
  } else {
    $(".dark-mode-container").removeClass("scrolled");
    $(".nav-link-wrapper").removeClass("scrolled");
    $(".ball").removeClass("bg-secondary");
    $(".ball").addClass("bg-light");
  }
});
