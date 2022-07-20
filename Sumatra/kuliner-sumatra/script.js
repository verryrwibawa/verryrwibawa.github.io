window.addEventListener("load", function () {
  $("#preloader").css("display", "none");
  $("body").removeClass("scrolled");

  // --- Animate On Scroll ---
  AOS.init({
    duration: 700,
    once: true,
  });

  // --- Change Navbar On Scroll ---
  let lastY = 0;
  let currentY = $(this).scrollTop();

  if (currentY > 0) {
    $("body").addClass("scrolled");
  }

  $(window).scroll(function (event) {
    lastY = currentY;
    currentY = $(this).scrollTop();
    if (currentY > lastY) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
    lastY = currentY;
    if (currentY > 100) {
      $("body").addClass("scrolled-100");
    } else {
      $("body").removeClass("scrolled-100");
    }
  });

  // Parallax
  $(window).scroll(function () {
    const parallax = $("#showcase");
    let scrollPosition = window.scrollY;

    parallax.css("background-position", "center " + scrollPosition * 0.5 + "px");
  });
});
