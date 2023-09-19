/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})





// image slider

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


window.jssor_1_slider_init = function() {

    var jssor_1_SlideshowTransitions = [
      {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};






const accordionItemHeaders2 = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


window.jssor_2_slider_init = function() {

    var jssor_2_SlideshowTransitions = [
      {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_2_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_2_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      }
    };

    var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_2_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_2_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};





const accordionItemHeaders3 = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


window.jssor_3_slider_init = function() {

    var jssor_3_SlideshowTransitions = [
      {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_3_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_3_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      }
    };

    var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_3_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_3_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};


const accordionItemHeaders4 = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


window.jssor_4_slider_init = function() {

    var jssor_4_SlideshowTransitions = [
      {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_4_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_4_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      }
    };

    var jssor_4_slider = new $JssorSlider$("jssor_4", jssor_4_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_4_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_4_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};



const accordionItemHeaders5 = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


window.jssor_5_slider_init = function() {

    var jssor_5_SlideshowTransitions = [
      {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_5_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_5_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      }
    };

    var jssor_5_slider = new $JssorSlider$("jssor_5", jssor_5_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_5_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_5_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};








jssor_1_slider_init();
jssor_2_slider_init();
jssor_3_slider_init();
jssor_4_slider_init();
jssor_5_slider_init();






jQuery(document).ready(function ($) {

  var options = {
      $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
      $AutoPlay: 1,                                       //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
      $Idle: 4000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
      $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

      $ArrowKeyNavigation: 1,   			                //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
      $SlideEasing: $Jease$.$OutQuint,                    //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
      $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
      $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide, default value is 20
      //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
      //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
      $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
      $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
      $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
      $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

      $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
          $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
          $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
          $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
          $Orientation: 1                                //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
      },

      $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
          $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
          $ChanceToShow: 2                                 //[Optional] Steps to go for each navigation request, default value is 1
      }
  };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales while window resizing
  function ScaleSlider() {
      var bodyWidth = document.body.clientWidth;
      if (bodyWidth)
          jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
      else
          window.setTimeout(ScaleSlider, 30);
  }
  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end
});