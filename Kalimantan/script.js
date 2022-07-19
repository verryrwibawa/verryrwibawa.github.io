$(".backToTop").click(function () {
    window.scrollTo(0, 0);
});

$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    $(".backToTop").toggleClass("show", $(this).scrollTop() > 100);
});