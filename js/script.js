$(document).ready(function(){
    $('.main-nav__hamburger').on('click', function(){
        $(this).toggleClass('active');
        $('.main-nav__menu--wrapper').toggleClass('active');
        $('body').toggleClass('active');
    });

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

