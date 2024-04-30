gsap.registerPlugin(ScrollTrigger);

const tlHeading = gsap.timeline();

$(document).ready(function() {
  // Function to perform hard refresh
  function hardRefresh() {
      location.reload(true); // Reload the page from the server (hard refresh)
  }

  // Detect browser's refresh event
  $(window).on('beforeunload', function() {
      // Perform hard refresh when the user manually refreshes the page
      hardRefresh();
  });

  // Scroll to the top of the page after reload
  $(window).on('load', function() {
      $(window).scrollTop(0);
  });
});

tlHeading.from(".anim-span span", 1.5, {
   y: "100%",
   ease: "power4.out",
   delay: 1,
   skewY: 0,
   stagger: {
      amount: 0.8,
   },
});

setTimeout(function () {
   $('.banner-wrapper').css('opacity', '1');

   $(".banner-phone-anim").addClass("active");

   setTimeout(function () {
      tlHeading.play();
   }, 800);

   setTimeout(function () {
      $(".banner-wrapper__content p").addClass("active");
   }, 1600);

   setTimeout(function () {
      $(".btn-group").addClass("active");
   }, 1700);
}, 500);




$("#banner_section").each(function (index) {
   let triggerElement = $(this);
   let targetElement = $(".phone-anim-single");
   let targetElement1 = $(".phone-anim-single__1");
   let targetElement2 = $(".phone-anim-single__2");
   let targetElement3 = $(".phone-anim-single__3");
   let targetElement4 = $(".phone-anim-single__4");
   let bottomPrec;

   if ($(window).width() < 767) {
      bottomPrec = "0%";
   } else {
      bottomPrec = "-13%";
   }

   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: triggerElement,
         start: "top top",
         end: "bottom 80%",
         scrub: 0.5,
         // markers: true,
      },
   });
   tl.to(targetElement, {
         scale: 1,
         bottom: bottomPrec,
         duration: 1,
      })
      .to(targetElement1, {
         left: "10%",
         duration: 1,
      })
      .to(
         targetElement4, {
            left: "90%",
            scale: 1,
            duration: 1,
         },
         "-=1"
      )
      .to(
         targetElement3, {
            left: "37%",
            scale: 1,
            duration: 1,
         },
         "-=.5"
      )
      .to(
         targetElement2, {
            left: "64%",
            scale: 1,
            duration: 1,
         },
         "-=1"
      );
});

const lineTriggerer = $('#core_values');

ScrollTrigger.create({
  trigger: lineTriggerer,
  start: "top 70%",
  onEnter: () => {
    $('.line-section').addClass('active');
  },
});

$(".anim-up-gsap").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tlUp = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 80%",
      // markers: true,
      onEnter: () => {
        $(this).addClass('active');
      }
    }
  });
});

// entertainment

  let entertainmentTrigger = $('.entertainment-wrapper');
  let entertainmentTarget = $('.entertainment-wrapper-single');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: entertainmentTrigger,
      start: "top top",
      end: "bottom bottom",
      scrub: .5,
      markers: true,
    }
  });
  tl.fromTo(entertainmentTarget, {
      transform: 'translateX(0)',
      duration: 1
    },
    {
      transform: 'translateX(-200px)',
      duration: 1
    }
  );

// telegram

const telegramHeading = $('.telegram-heading-wrapper h2');
const telegramContentFirst = $('.telegram-content-wrapper__1')
const telegramContentSecond = $('.telegram-content-wrapper__2')
const animDiv = $('.anim-div')

const tlTelegram = gsap.timeline();

// Add animation to the timeline
tlTelegram.to(animDiv, {
  width: '100%',
  duration: 2,
  ease: "bounce.out",
})
.from(telegramHeading,{
  y: 50,
  opacity: 0,
  duration: .8
}, '-=1')
.from(telegramContentFirst, {
  x: 30,
  opacity: 0,
  duration: .8
}, '-=0.6')
.from(telegramContentSecond, {
  x: 30,
  opacity: 0,
  duration: .8
}, '-=0.6')
;

tlTelegram.pause();

// Create the scrollTrigger with the timeline
gsap.to("#telegram_collaboration", {
  scrollTrigger: {
    trigger: "#telegram_collaboration",
    start: "59 60%",
    // markers: true,
    onEnter: () => {
      tlTelegram.play();
    }
  }
});

// lottie
$(document).ready(function(){

  let triggerElement1 = $('#animation_1');

  let tlAnim1 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement1,
      start: "top 70%",
      // markers: true,
      onEnter: () => {
        anim_1.play()
      }
    }
  });

 var anim_1 = lottie.loadAnimation({
     container: document.getElementById('animation_1'),
     path: '../lottie/icon1.json',
     renderer: 'svg',
     loop: false,
     autoplay: false,
     name: "animation1"
 })     
        
});

$(document).ready(function(){

   let triggerElement2 = $('#animation_2');
 
   let tlAnim2 = gsap.timeline({
     scrollTrigger: {
       trigger: triggerElement2,
       start: "top 70%",
      //  markers: true,
       onEnter: () => {
         anim_2.play()
       }
     }
   });
 
  var anim_2 = lottie.loadAnimation({
      container: document.getElementById('animation_2'), 
      path: '../lottie/icon2.json', 
      renderer: 'svg', 
      loop: false,
      autoplay: false,
      name: "animation2"
  })     
         
 });

 
$(document).ready(function(){

   let triggerElement3 = $('#animation_3');
 
   let tlAnim3 = gsap.timeline({
     scrollTrigger: {
       trigger: triggerElement3,
       start: "top 70%",
      //  markers: true,
       onEnter: () => {
         anim_3.play()
       }
     }
   });
 
  var anim_3 = lottie.loadAnimation({
      container: document.getElementById('animation_3'), 
      path: '../lottie/icon3.json', 
      renderer: 'svg', 
      loop: false,
      autoplay: false,
      name: "animation2"
  })     
         
 });

 $(document).ready(function(){

   let triggerElement4 = $('#animation_4');
 
   let tlAnim4 = gsap.timeline({
     scrollTrigger: {
       trigger: triggerElement4,
       start: "top 70%",
      //  markers: true,
       onEnter: () => {
         anim_4.play()
       }
     }
   });
 
  var anim_4 = lottie.loadAnimation({
      container: document.getElementById('animation_4'), 
      path: '../lottie/icon4.json', 
      renderer: 'svg', 
      loop: false,
      autoplay: false,
      name: "animation2"
  })     
         
 });



 $(document).ready(function(){

  function touchHandler(event) {
      var touch = event.changedTouches[0];
      
      if ($(touch.target).hasClass('child')) {
          var simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent({
              touchstart: "mousedown",
              touchmove: "mousemove",
              touchend: "mouseup"
          }[event.type], true, true, window, 1,
              touch.screenX, touch.screenY,
              touch.clientX, touch.clientY, false,
              false, false, false, 0, null);

          touch.target.dispatchEvent(simulatedEvent);
          event.preventDefault();
      }
  }

  function initTouchEvents() {
      document.addEventListener("touchstart", touchHandler, true);
      document.addEventListener("touchmove", touchHandler, true);
      document.addEventListener("touchend", touchHandler, true);
      document.addEventListener("touchcancel", touchHandler, true);
  }

  initTouchEvents(); 
  

  $( ".child" ).draggable({
      containment: "parent",
      classes: {
          "ui-draggable": "highlight"
      },
      start: function() {
      },
      drag: function() {
          calculateOrange();
          moveBottomBoxes();
          
      },
      stop: function() {
          calculateOrange();
      }
  });

  function calculateOrange(){
      var obj = $('.child');
      var childPos = obj.offset();
      var parentPos = obj.parent().offset();
      var childOffset = {
          left: childPos.left - parentPos.left
      }
      var parentWidth = obj.parent().width();
      var percentage = (childOffset.left) / parentWidth * 100;
      $('.parent .lineorange').css('width', percentage+'%');
  }

  function moveBottomBoxes(){
      var obj = $('.child');
      var childPos = obj.offset();
      var parentPos = obj.parent().offset();
      var childOffset = {
          left: childPos.left - parentPos.left
      }
      var parentWidth = obj.parent().width();
      const buttonWidth = $('.child').outerWidth();
      var percentage = (childOffset.left) / (parentWidth - buttonWidth);
      let fullWidth = 0;

      $('.roadmap-box').each(function(){
          fullWidth += $(this).outerWidth(true);
      });

      const totalWidthDecrease =  $('.roadmap-box').outerWidth(true) * 3;

      var percentageBoxes = (fullWidth - totalWidthDecrease) * percentage;
      $('.roadmap-bottom .roadmap-inner').css('transform', 'translateX(-'+percentageBoxes+'px)')
  }
 

});