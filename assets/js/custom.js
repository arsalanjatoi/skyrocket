$(document).ready(function () {

    $(".icon").click(function () {
        $("#video-link")[0].src += "?rel=0&autoplay=1";
        $('.icon').css('visibility', 'hidden');
        $('#video-image').css('visibility', 'hidden');
        $("#video-link").css('opacity', '1');
    });
    $(".icon-2").click(function () {
        $("#video-link-markets")[0].src += "?rel=0&autoplay=1";
        $('.icon-2').css('visibility', 'hidden');
        $('#video-image').css('visibility', 'hidden');
        $("#video-link-markets").css('opacity', '1');
    });

    $(".play-icon-v1").click(function () {
        $(this).parents().siblings('iframe')[0].src += "?rel=0&autoplay=1";
        $(this).parent().css('display', 'none');
        $(this).parents().siblings('img').css('display', 'none');
        $(this).parents().siblings('iframe').css('display', 'block');
    });

});

$('.owl-carousel-1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});
$('.owl-carousel-markets').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});
$('.owl-carousel-videos').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// $('.counters').each(function () {
//     $(this).prop('Counter', 0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });