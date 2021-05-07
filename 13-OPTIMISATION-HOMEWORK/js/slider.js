// $(document).ready(function () {
//   $('.review-slider').slick();
//   $('.single-item').slick();
// });
$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 4000,
    items: 1,
    nav: true,
    navText: ["<img src='../img/arrow-left.png'>", "<img src='../img/arrow-right.png'>"],
    dots: false,
  });
});