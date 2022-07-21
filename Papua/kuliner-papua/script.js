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

  // Parallax
  $(window).scroll(function () {
    const parallax = $("#showcase");
    let scrollPosition = window.scrollY;

    parallax.css("background-position", "center " + scrollPosition * 0.5 + "px");
  });

  // daftar isi active on scroll
  const divs = $(".main-content > div");
  const links = $(".daftar-isi-link");

  $(window).scroll(function () {
    let scrollPosition = window.scrollY;
    let current = "";
    $.each(divs, function (i) {
      //get Offset
      const getOffsetTop = (element) => {
        let offsetTop = 0;
        while (element) {
          offsetTop += element.offsetTop;
          element = element.offsetParent;
        }
        return offsetTop;
      };

      // calling
      const divTop = getOffsetTop(divs[i]);
      const divHeight = divs[i].clientHeight;
      if (scrollPosition > divTop - 350) {
        current = divs[i].getAttribute("id");
      }
    });

    // add active class
    $.each(links, function (i) {
      $(links[i]).removeClass("active");
      if (links[i].getAttribute("href") === "#" + current) {
        $(links[i]).addClass("active");
      }
    });
  });
});
