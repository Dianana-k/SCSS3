
$(function(){
    $('.humburger').on('click', function () {
        $('.sp-nav').addClass('toggle');
    });
    $('.close').on('click', function () {
        $('.sp-nav').removeClass('toggle');
    });
    $('.humburger').on('click', function () {
        $('.sp-nav').addClass('show');
    });
})