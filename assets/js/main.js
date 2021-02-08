(function($) {
    "use strict";

    // DetailProjek carousel (uses the Owl Carousel library)
    $(".detailprojek-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });



})(jQuery);

//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

//slide swap left and right
$(document).ready(function() {
    /***********
     SLIDE LEFT
    ************/
    function slideLeft() {
        pos--;
        if (pos == -1) { pos = totalSlides - 1; }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

        countSlides();
        pagination();
    }


    /************
     SLIDE RIGHT
    *************/
    function slideRight() {
        pos++;
        if (pos == totalSlides) { pos = 0; }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

        countSlides();
        pagination();
    }
});