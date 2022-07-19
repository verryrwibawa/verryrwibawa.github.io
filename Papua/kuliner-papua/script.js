$(".backToTop").click(function () {
    window.scrollTo(0, 0);
});

$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
    $(".backToTop").toggleClass("show", $(this).scrollTop() > 50);
    $(".btn-hamburger").toggleClass("text-white", $(this).scrollTop() > 50);
    $("nav > div > .navbar-brand").toggleClass("text-white", $(this).scrollTop() > 50);
});

