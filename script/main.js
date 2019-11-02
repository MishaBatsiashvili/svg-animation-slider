$(function(){
       
    function svgAnimation (numExt){
        (function(){
            var myEasing = 'easingQuadraticInOut';
            var tween = KUTE.fromTo(
                '#first-wave-top'+numExt,
                {path: '#first-wave-top'+numExt },
                {path: '#second-wave-top'+numExt },
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
                '#first-wave-top'+numExt,
                {path: '#second-wave-top'+numExt },
                {path: '#third-wave-top'+numExt },
                {
                    morphIndex: 10,
                    morphPrecision: 5,
                    duration: 3000,
                    easing: myEasing,
                    delay: 0,
                });

            var tween3 = KUTE.fromTo(
                '#first-wave-top'+numExt,
                {path: '#third-wave-top'+numExt },
                {path: '#first-wave-duplicate-top'+numExt },
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
        })();


        (function(){
            
            var myEasing = 'easingQuadraticInOut';
            var tween = KUTE.fromTo(
                '#first-wave'+numExt,
                {path: '#first-wave'+numExt },
                {path: '#second-wave'+numExt },
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
                '#first-wave'+numExt,
                {path: '#second-wave'+numExt },
                {path: '#third-wave'+numExt },
                {
                    morphIndex: 10,
                    morphPrecision: 5,
                    duration: 3000,
                    easing: myEasing,
                    delay: 0,
                });

            var tween3 = KUTE.fromTo(
                '#first-wave'+numExt,
                {path: '#third-wave'+numExt },
                {path: '#first-wave-duplicate'+numExt },
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
        })();
    }


    function svgAnimationHTML(numExt) {
        return `
        <div class='polygon-animation-2'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="360 561 1440 320" style="enable-background:new 360 561 1440 320;" xml:space="preserve">
                <style type="text/css">
                    .st0{
                        fill:#fff;
                        fill-opacity: 0.6;
                    }
                    .st1{visibility:hidden; fill:#0099FF; fill-opacity:0.7;}
                </style>

                <path id="first-wave-top${numExt}" class="st0" d="M360,561h1185.1l-69.1,25l-263,21l-312,73l-270-19l-271,75V561z"/>
                <path id="first-wave-duplicate-top${numExt}" class="st1" d="M360,561h1185.1l-69.1,25l-263,21l-312,73l-270-19l-271,75V561z"/>
                <path id="second-wave-top${numExt}" class="st1" d="M360,561h1185.1l-70.1,43l-263-5l-211,79l-360-18l-281,76V561z"/>
                <path id="third-wave-top${numExt}" class="st1" d="M360,561h1185.1l-66,32.6L1220,617l-194,79l-388-21l-278,61V561z"/>
                
            </svg>
        </div>
        
        <div class='polygon-animation'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="360 561 1440 320" style="enable-background:new 240 121 1440 320;" xml:space="preserve">
    
                <path id="first-wave${numExt}" class="st0" d="M708.7,881L891,857l189-26.4l272.1-1.5l307.3-99.6l140.6-18.9V881H875.3H708.7z"/>
                <path id="first-wave-duplicate${numExt}" class="st1" d="M708.7,881L891,857l189-26.4l272.1-1.5l307.3-99.6l140.6-18.9V881H875.3H708.7z"/>
                <path id="second-wave${numExt}" class="st1" d="M708.7,881L891,857l202-46l300-10l301-80l106-46.4V881H875.3H708.7z"/>
                <path id="third-wave${numExt}" class="st1" d="M708.7,881L891,857l151-63l327,4l240-62l191-77.9V881H875.3H708.7z"/>

                
            </svg>
        </div>`;
    } 


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    speed: 2000,
    simulateTouch: false,
    // loop: true,
    // simulateTouch: false,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    }
  });

  $('.swiper-slide').each(function(index, el){
      $(el).append(
          svgAnimationHTML(index)
      );

      svgAnimation(index);

  });


    swiper.on('slideChange', function () {
        // remove scaling animation class from all of the slides
        // $('.text-header').each(function(index, el){
        //     $(el).css('opacity', 0);    
        // });
        $('.text-header').each(function(index, el){
            $(el).animate({
                opacity: 0,
            }, 500);
        });
        

        $('.text-par').each(function(index, el){
            $(el).animate({
                opacity: 0,
            }, 500);
        });
        


    });

    swiper.on('transitionEnd', function () {
        
        // making all headers visible and animating them
        $('.text-header').each(function(index, el){
            $(el).css('opacity', 1);    
        });

        $('.text-header').each(function(index, el){
            $(el).stop().textillate('in');   
        });

        // making all paragraphs visible and animating them

        $('.text-par').each(function(index, el){
            $(el).animate({
                opacity: 1
            }, 500);
        });

        // remove scaling animation class from all of the slides
        $('.swiper-slide-image').each(function(index, el){
            $(el).removeClass('slide-scale');
        });
        
        // add scaling animaction class to active slide
        $('.swiper-slide-image').eq(swiper.activeIndex).addClass('slide-scale');
    });






});