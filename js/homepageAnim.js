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