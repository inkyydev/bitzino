$(document).ready(function(){

    options = {
        "cursorOuter": "circle-basic",
        "hoverEffect": "circle-move",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 30,
        "outerHeight": 30
          };
        magicMouse(options);

});

$(document).ready(function () {
  function toggleNav() {
    $(".main-nav__hamburger").toggleClass("active");
    $(".main-nav__items").toggleClass("active");
    $("body").toggleClass("active");
  }

  if ($(window).width() < 1024) {
    $(".main-nav__hamburger").on("click", toggleNav);
    $(".main-nav__items a").on("click", toggleNav);
  }
});