$(function(){
    function svgFirst () {
        var myEasing = 'easingQuadraticInOut';
        var tween = KUTE.fromTo(
            '#first-wave',
            {path: '#first-wave' },
            {path: '#second-wave' },
            {
                morphIndex: 100,
                morphPrecision: 4,
                duration: 3000,
                easing: myEasing,
                delay: 0,
                // repeat: 999,
                yoyo: true,
            }).start();

        var tween2 = KUTE.fromTo(
            '#first-wave',
            {path: '#second-wave' },
            {path: '#third-wave' },
            {
                morphIndex: 10,
                morphPrecision: 5,
                duration: 3000,
                easing: myEasing,
                delay: 0,
            });

        var tween3 = KUTE.fromTo(
            '#first-wave',
            {path: '#third-wave' },
            {path: '#first-wave-duplicate' },
            {
                morphIndex: 100,
                morphPrecision: 7,
                duration: 3000,
                easing: myEasing,
                delay: 0,
                complete: function(){
                    tween.start();
                }
            });

        tween.chain(tween2);
        tween2.chain(tween3);
    }
       
    function svgSecond (){
        var myEasing = 'easingQuadraticInOut';
        var tween = KUTE.fromTo(
            '#first-wave2',
            {path: '#first-wave2' },
            {path: '#second-wave2' },
            {
                morphIndex: 100,
                morphPrecision: 4,
                duration: 4000,
                easing: myEasing,
                delay: 500,
                // repeat: 999,
                yoyo: true,
            }).start();

        var tween2 = KUTE.fromTo(
            '#first-wave2',
            {path: '#second-wave2' },
            {path: '#third-wave2' },
            {
                morphIndex: 10,
                morphPrecision: 5,
                duration: 3000,
                easing: myEasing,
                delay: 0,
            });

        var tween3 = KUTE.fromTo(
            '#first-wave2',
            {path: '#third-wave2' },
            {path: '#first-wave-duplicate2' },
            {
                morphIndex: 100,
                morphPrecision: 7,
                duration: 3000,
                easing: myEasing,
                delay: 0,
                complete: function(){
                    tween.start();
                }
            });

        tween.chain(tween2);
        tween2.chain(tween3);
    }


    var svgAnimationHTML = `
    
<div class='polygon-animation-2'>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 1440 320" style="enable-background:new 0 0 1440 320;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#fff;fill-opacity: 0.8;}
            .st1{visibility:hidden; fill:#0099FF; fill-opacity:0.7;}
        </style>

        <path id="first-wave2" class="st0" d="M0,0h1185.1l-66,32.6l-387,73.5l-325.5,141l-186-57L0,221.6V0z"/>
        <path id="second-wave2" class="st1" d="M0,0h1185.1l-66,32.6l-337.5,36l-267,135l-253.5-33L0,221.6V0z"/>
        <path id="third-wave2" class="st1" d="M0,0h1185.1l-66,32.6l-291,40.5l-316.5,156l-300-78L0,221.6V0z"/>
        <path id="first-wave-duplicate2" class="st1" d="M0,0h1185.1l-66,32.6l-387,73.5l-325.5,141l-186-57L0,221.6V0z"/>
        
    </svg>
</div>

<div class='polygon-animation'>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="240 121 1440 320" style="enable-background:new 240 121 1440 320;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#fff;fill-opacity: 0.8;}
            .st1{visibility:hidden; fill:#0099FF; fill-opacity:0.7;}
        </style>

        <path id="first-wave" class="st0" d="M588.7,441L771,417l189-26.4l272.1-1.5l307.3-99.6l140.6,36.6V441H755.3H588.7z"/>
        <path id="second-wave" class="st1" d="M588.7,441L771,417l202-46l300-10l301-80l106,45.1V441H755.3H588.7z"/>
        <path id="third-wave" class="st1" d="M588.7,441L771,417l151-63l327,4l240-62l191,30.1V441H755.3H588.7z"/>
        <path id="first-wave-duplicate" class="st1" d="M588.7,441L771,417l189-26.4l272.1-1.5l307.3-99.6l140.6,36.6V441H755.3H588.7z"/>
        
    </svg>
</div>`;


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    }
  });


    swiper.on('slideChange', function () {
        // remove scaling animation class from all of the slides
        // $('.swiper-slide').each(function(index, el){
        //     $(el).find('.polygon-animation').remove();
        //     $(el).find('.polygon-animation-2').remove();
        // });
    });

    swiper.on('transitionEnd', function () {
        
        // remove scaling animation class from all of the slides
        $('.swiper-slide').each(function(index, el){
            $(el).find('.polygon-animation').remove();
            $(el).find('.polygon-animation-2').remove();
        });

        // $('.swiper-container .swiper-slide').eq(swiper.activeIndex).append(svgAnimationHTML);
        // $('.polygon-animation, .polygon-animation-2').css('opacity', '0');
        
        // svgFirst();
        // svgSecond();

        // $('.polygon-animation, .polygon-animation-2').animate({
        //     opacity: 1,
        // }, 300)

        // remove scaling animation class from all of the slides
        $('.swiper-slide-image').each(function(index, el){
            $(el).removeClass('slide-scale');
        });
        // add scaling animaction class to active slide
        $('.swiper-slide-image').eq(swiper.activeIndex).addClass('slide-scale');
    });














    
    
    
    // tween2.chain(tween);
    // morphTween22.chain(morphTween23);
    // morphTween23.chain(morphTween21);
});