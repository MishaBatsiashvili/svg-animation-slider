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
            viewBox="0 0 1440 320" style="enable-background:new 0 0 1440 320;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#fff;fill-opacity: 0.8;}
                    .st1{visibility:hidden; fill:#0099FF; fill-opacity:0.7;}
                </style>
        
                <path id="first-wave-top${numExt}" class="st0" d="M0,0h1185.1l-66,32.6l-387,73.5l-325.5,141l-186-57L0,221.6V0z"/>
                <path id="second-wave-top${numExt}" class="st1" d="M0,0h1185.1l-66,32.6l-337.5,36l-267,135l-253.5-33L0,221.6V0z"/>
                <path id="third-wave-top${numExt}" class="st1" d="M0,0h1185.1l-66,32.6l-291,40.5l-316.5,156l-300-78L0,221.6V0z"/>
                <path id="first-wave-duplicate-top${numExt}" class="st1" d="M0,0h1185.1l-66,32.6l-387,73.5l-325.5,141l-186-57L0,221.6V0z"/>
                
            </svg>
        </div>
        
        <div class='polygon-animation'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="240 121 1440 320" style="enable-background:new 240 121 1440 320;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#fff;fill-opacity: 0.8;}
                    .st1{visibility:hidden; fill:#0099FF; fill-opacity:0.7;}
                </style>
        
                <path id="first-wave${numExt}" class="st0" d="M588.7,441L771,417l189-26.4l272.1-1.5l307.3-99.6l140.6,36.6V441H755.3H588.7z"/>
                <path id="second-wave${numExt}" class="st1" d="M588.7,441L771,417l202-46l300-10l301-80l106,45.1V441H755.3H588.7z"/>
                <path id="third-wave${numExt}" class="st1" d="M588.7,441L771,417l151-63l327,4l240-62l191,30.1V441H755.3H588.7z"/>
                <path id="first-wave-duplicate${numExt}" class="st1" d="M588.7,441L771,417l189-26.4l272.1-1.5l307.3-99.6l140.6,36.6V441H755.3H588.7z"/>
                
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














    
    
    
    // tween2.chain(tween);
    // morphTween22.chain(morphTween23);
    // morphTween23.chain(morphTween21);
});