var body = document.querySelector("body");
var title = document.querySelector(".title");
var navbar = document.querySelector(".navbar");
body.onload = function(){setTimeout(fadeIn, 1000)};

function fadeIn(){
title.classList.remove("fadeOut");
navbar.classList.remove("fadeOut");
}

  // $( document ).ready(function() {

  //       var src = "logo_glitch.gif?p" + new Date().getTime();
  //       $("#center-logo").attr("src", src);

  //   });