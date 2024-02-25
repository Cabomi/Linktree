gsap.set("#toggle", {x: 185, y: -2});


var tlDonut = gsap.timeline({repeat: -1, delay: .5});

tlDonut.to("#donut", 4, {transformOrigin: "center", rotate: 10, ease: Elastic.easeOut});
tlDonut.to("#donut-face", 4, {delay: -4, transformOrigin: "center", rotate: 15, ease: Elastic.easeOut});
tlDonut.to("#donut-eye-r", 2, {delay: -4, transformOrigin: "center", rotate: 15, ease: Power3.easeInOut});
tlDonut.to("#donut-eye-l", 2, {delay: -4, transformOrigin: "center", rotate: 15, ease: Power3.easeInOut});
tlDonut.to("#donut-arm-r", 4, {delay: -2, transformOrigin: "left", rotate: -15, ease: "elastic.out(1, 0.3)"});

tlDonut.to("#donut", 4, {transformOrigin: "center", rotate: -10, ease: Elastic.easeOut});
tlDonut.to("#donut-face", 8, {delay: -4, transformOrigin: "center", rotate: -10, ease: Elastic.easeOut});
tlDonut.to("#donut-eye-r", 2, {delay: -4, transformOrigin: "center", rotate: -15, ease: Power3.easeInOut});
tlDonut.to("#donut-eye-l", 2, {delay: -4, transformOrigin: "center", rotate: -15, ease: Power3.easeInOut});
tlDonut.to("#donut-arm-r", 4, {delay: -2, transformOrigin: "left", rotate: 15, x: 5, ease: "elastic.out(1, 0.3)"});

tlDonut.to("#donut", 4, {delay: -4, transformOrigin: "center", rotate: 0, ease: Elastic.easeOut});
tlDonut.to("#donut-face", 4, {delay: -4, transformOrigin: "center", rotate: 0, ease: Elastic.easeOut});
tlDonut.to("#donut-eye-r", 2, {delay: -4, transformOrigin: "center", rotate: 0, ease: Power3.easeInOut});
tlDonut.to("#donut-eye-l", 2, {delay: -4, transformOrigin: "center", rotate: 0, ease: Power3.easeInOut});
tlDonut.to("#donut-arm-r", 4, {delay: -2, transformOrigin: "left", rotate: 0, x: 0, ease: "elastic.out(1, 0.3)"});

var tlLaugh = gsap.timeline({repeat: -1});

tlLaugh.to("#donut-mouth", .15, {y: -4, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: -4, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: 4, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: 4, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: -3, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: -3, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: 3, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: 3, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: -2, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: -2, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: 2, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: 2, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: -1, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: -1, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: 1, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: 1, ease: Power1.easeInOut});
tlLaugh.to("#donut-mouth", .15, {y: 0, ease: Power1.easeInOut});
tlLaugh.to("#donut-tongue", .15, {delay: -.2, y: 0, ease: Power1.easeInOut});
tlLaugh.to({}, 1, {});

var tlHello = gsap.timeline({repeat: -1, delay: .5});

tlHello.to("#donut-arm-l", 4, {transformOrigin: "right", rotate: 30, x: 10, ease: "elastic.out(1, 0.3)"});
tlHello.to("#donut-arm-l", 4, {delay: -3.5, transformOrigin: "right", rotate: 20, x: 0, ease: "elastic.out(1, 0.3)"});
tlHello.to("#donut-arm-l", 4, {delay: -3.5, transformOrigin: "right", rotate: 30, x: 10, ease: "elastic.out(1, 0.3)"});

tlHello.to("#donut-arm-l", 4, {delay: -1, rotate: 0, x: 0, ease: "elastic.out(1, 0.3)"});

$("#btnOn").click(function(){
  $("#btnOn, #btnOff").css({
    "pointer-events": "none"
  });
  
  setTimeout(function(){
    $("#btnOn, #btnOff").css({
      "pointer-events": "all"
    });
  }, 2500);
  
  $(this).fadeToggle();
  $("#btnOff").show();
  
  gsap.to("#toggle", 2, {rotate: 360, x: 240, ease: Power3.easeInOut});
  
  gsap.to("#donut-arm-l", .5, {x: 20, scale: 0, ease: Power1.easeInOut});
  gsap.to("#donut-arm-r", .5, {x: -20, scale: 0, ease: Power1.easeInOut});
  
  gsap.to("#donut-eye-l", .5, {delay: .25, morphSVG: {
    shape: "#donut-rolling-eye-l",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-eye-r", .5, {delay: .25, morphSVG: {
    shape: "#donut-rolling-eye-r",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-mouth", .5, {delay:.25, morphSVG: {
    shape: "#donut-rolling-mouth",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-tongue", .5, {opacity: 0});
  
  setTimeout(function(){
    gsap.to("#donut-eye-l", .5, {morphSVG: {
    shape: "#donut-eye-l",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-eye-r", .5, {morphSVG: {
    shape: "#donut-eye-r",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-mouth", .5, {morphSVG: {
    shape: "#donut-mouth",
    shapeIndex: 2,
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-tongue", .5, {opacity: 1});
  gsap.to("#donut-arm-l", 1, {x: 0, scale: 1, ease: Power1.easeInOut});
  gsap.to("#donut-arm-r", 1, {x: 0, scale: 1, ease: Power1.easeInOut});
  }, 1800);
});

$("#btnOff").click(function(){
  $(this).fadeToggle();
  $("#btnOn").fadeToggle();
  
  $("#btnOn, #btnOff").css({
    "pointer-events": "none"
  });
  
  setTimeout(function(){
    $("#btnOn, #btnOff").css({
      "pointer-events": "all"
    });
  }, 2500);
  
  gsap.to("#toggle", 2, {rotate: 0, x: 185, ease: Power3.easeInOut});
  
  gsap.to("#donut-arm-l", .5, {x: 20, scale: 0, ease: Power1.easeInOut});
  gsap.to("#donut-arm-r", .5, {x: -20, scale: 0, ease: Power1.easeInOut});
  
  gsap.to("#donut-eye-l", .5, {delay:.25, morphSVG: {
    shape: "#donut-rolling-eye-l",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-eye-r", .5, {delay:.25, morphSVG: {
    shape: "#donut-rolling-eye-r",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-mouth", .5, {delay:.25,morphSVG: {
    shape: "#donut-rolling-mouth",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-tongue", .5, {opacity: 0});
  
  setTimeout(function(){
    gsap.to("#donut-eye-l", .5, {morphSVG: {
    shape: "#donut-eye-l",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-eye-r", .5, {morphSVG: {
    shape: "#donut-eye-r",
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-mouth", .5, {morphSVG: {
    shape: "#donut-mouth",
    shapeIndex: 2,
    ease: Power1.easeInOut
  }});
  gsap.to("#donut-tongue", .5, {opacity: 1});
  gsap.to("#donut-arm-l", 1, {x: 0, scale: 1, ease: Power1.easeInOut});
  gsap.to("#donut-arm-r", 1, {x: 0, scale: 1, ease: Power1.easeInOut});
  }, 1800);
});