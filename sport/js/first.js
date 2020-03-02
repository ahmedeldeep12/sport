// slider
/*
var leftArrow = document.getElementById("fa-left");
var rightArrow = document.getElementById("fa-right");
var slidImg = Array.from (document.getElementsByClassName("slid-img"));
var curntImg;

 
for (var i = 0; i<slidImg.length; i++) 
{
    curntImg = slidImg[i]
}


 function next() {
     curntImg++;
    curntImg.style.display="none"
 }
 rightArrow.addEventListener ("click", next)


 function prev() {
    console.log("prev")
}

leftArrow.addEventListener ("click", prev)
*/


var swiper = new Swiper('.swiper-container', {

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function() {  
  $("body").niceScroll({
    cursorcolor: "#ff4500",
    cursorborder: "1px solid #ff4500", 
  });
});