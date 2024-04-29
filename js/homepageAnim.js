gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const tlHeading = gsap.timeline();

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
     container: document.getElementById('animation_1'), // Required
     path: '../lottie/icon1.json', // Required
     renderer: 'svg', // Required
     loop: false, // Optional
     autoplay: false, // Optional
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
      container: document.getElementById('animation_2'), // Required
      path: '../lottie/icon2.json', // Required
      renderer: 'svg', // Required
      loop: false, // Optional
      autoplay: false, // Optional
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
      container: document.getElementById('animation_3'), // Required
      path: '../lottie/icon3.json', // Required
      renderer: 'svg', // Required
      loop: false, // Optional
      autoplay: false, // Optional
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
      container: document.getElementById('animation_4'), // Required
      path: '../lottie/icon4.json', // Required
      renderer: 'svg', // Required
      loop: false, // Optional
      autoplay: false, // Optional
      name: "animation2"
  })     
         
 });