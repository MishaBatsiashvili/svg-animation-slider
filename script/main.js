$(function(){
       
    function svgAnimation (numExt){
        // BOTTOM LINE
        (function(){
                var myEasing = 'easingQuarticInOut';

                var originalPath =$('#first-wave'+numExt);
                var duplicatePath =$('#first-wave-duplicate'+numExt);
                var bufferTime = 100; //compenstates for internal delay between animation start and "start:" event

                // hiding duplicate on default
                originalPath.css('opacity', '0');
                duplicatePath.css('opacity', '0');

            
                // tween bottom
                const bottomStep1 = KUTE.fromTo(
                    '#first-wave'+numExt,
                    { draw : '0% 0%' },
                    { draw : '0% 100%' },
                    {
                        easing: myEasing,
                        duration: 2000,
                        delay: 1500,
                        start: function(){
                            setTimeout(function(){
                                originalPath.animate({
                                    opacity: 1
                                }, 100);
                            }, 1500)
                        },
                        complete: function(){
                            
                            // originalPath.css('opacity', '0');
                        }
                    }
                ).start();

                

                const bottomStep2 = KUTE.fromTo(
                    '#first-wave-duplicate'+numExt,
                    { draw : '0% 100%' },
                    { draw : '0% 0%' },
                    {
                        easing: myEasing,
                        duration: 2000,
                        delay: 1500,
                        start: function(){
                            setTimeout(function(){
                                
                                duplicatePath.animate({
                                    opacity: 1
                                }, 0);

                                originalPath.animate({
                                    opacity: 0
                                }, 100);

                            }, 1500);

                        },
                        complete: function(){
                            originalPath.css('opacity', '0');
                        }
                    }
                );

                bottomStep1.chain(bottomStep2);
                bottomStep2.chain(bottomStep1);
        })();

        // TOP LINE
        (function(){
            var myEasing = 'easingQuarticInOut';

                var originalPath =$('#first-wave-top'+numExt);
                var duplicatePath =$('#first-wave-top-duplicate'+numExt);
                var bufferTime = 100; //compenstates for internal delay between animation start and "start:" event

                // hiding duplicate on default
                originalPath.css('opacity', '0');
                duplicatePath.css('opacity', '0');

            
                // tween bottom
                const topStep1 = KUTE.fromTo(
                    '#first-wave-top'+numExt,
                    { draw : '0% 0%' },
                    { draw : '0% 100%' },
                    {
                        easing: myEasing,
                        duration: 2000,
                        delay: 1500,
                        start: function(){
                            setTimeout(function(){
                                originalPath.animate({
                                    opacity: 1
                                }, 100);
                            }, 1500)
                        },
                        complete: function(){
                            
                            // originalPath.css('opacity', '0');
                        }
                    }
                ).start();

                

                const topStep2 = KUTE.fromTo(
                    '#first-wave-top-duplicate'+numExt,
                    { draw : '0% 100%' },
                    { draw : '0% 0%' },
                    {
                        easing: myEasing,
                        duration: 2000,
                        delay: 1500,
                        start: function(){
                            setTimeout(function(){
                                
                                duplicatePath.animate({
                                    opacity: 1
                                }, 0);

                                originalPath.animate({
                                    opacity: 0
                                }, 100);

                            }, 1500);

                        },
                        complete: function(){
                            originalPath.css('opacity', '0');
                        }
                    }
                );

                topStep1.chain(topStep2);
                topStep2.chain(topStep1);
        })();

    }


    function svgAnimationHTML(numExt) {
        return `
        <div class='polygon-animation-2'>
            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="360 561 1440 320" style="enable-background:new 360 561 1440 320;" xml:space="preserve">
                <style type="text/css">
                    .st0{
                        fill: transparent;
                        stroke:#fff;
                        stroke-width: 10px;
                        fill-opacity: 0.8;
                    }
                    .st1{
                        visibility:hidden;
                        fill:#0099FF;
                        fill-opacity:0.7;
                    }
                </style>
        
                <path id="first-wave-top${numExt}" class="st0" d="M360,782.6l220.6-31.5l248,57l274.5-81l123-111l319-55.1"/>
                <path id="first-wave-top-duplicate${numExt}" class="st0" d="M1545.1,561l-319,55.1l-123,111l-274.5,81l-248-57L360,782.6"/>
                
                
            </svg>
        </div>
        
        <div class='polygon-animation'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="414 237 1440 320" style="enable-background:new 414 237 1440 320;" xml:space="preserve">
        
                <path id="first-wave${numExt}" class="st0" d="M762.7,557L945,533l189-26.4l272.1-1.5l334.5-85.5l113.4-102"/>
                <path id="first-wave-duplicate${numExt}" class="st0" d="M1854,317.6l-113.4,102l-334.5,85.5l-272.1,1.5L945,533l-182.3,24"/>
                
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