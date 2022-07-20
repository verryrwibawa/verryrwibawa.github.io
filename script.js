window.addEventListener("load", function () {
  $("#preloader").css("display", "none");
  $("body").removeClass("scrolled");

  // --- Animate On Scroll ---
  AOS.init({
    duration: 700,
    once: true,
  });

  // --- Dark Mode ---
  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    $("body").addClass("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    $("body").removeClass("dark-mode");
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
});
