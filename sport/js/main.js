

// Nice Scroll 

$(function() {  
    $("body").niceScroll({
      cursorcolor: "#ff4500",
      cursorborder: "1px solid #ff4500", 
    });
  });



var overlayPhoto = document.getElementById('ov-ph');
var myImage = Array.from(document.getElementsByClassName('img-fluid'));
var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var hint = document.getElementById('hint');
var imgNumber;


for (var i = 0; i < myImage.length; i++ )
{
    myImage[i].addEventListener("click", showOverLay)
};


function showOverLay (e) {

    
    overlayPhoto.style.display = "flex";
    var imgsrc = e.target.src;
    overlayPhoto.firstElementChild.style.backgroundImage="url("+imgsrc+")"

    imgNumber = myImage.indexOf(e.target);
};




close.addEventListener("click", function () {
    overlayPhoto.style.display="none"
});



function nextImg() {
    imgNumber++;
    if (imgNumber==myImage.length){
        imgNumber =  0;
    }
    overlayPhoto.firstElementChild.style.backgroundImage="url("+myImage[imgNumber].src+")"
};

next.addEventListener('click', nextImg )

function prevPhoto() {
    imgNumber --;
    if (imgNumber < 0) {
        imgNumber = myImage.length -1
    }
    overlayPhoto.firstElementChild.style.backgroundImage="url("+myImage[imgNumber].src+")"

}

prev.addEventListener("click", prevPhoto)


function key(e) {
    if (e.keyCode==39) {
        nextImg();
    }
    else if (e.keyCode==37) {
        prevPhoto();
    }
    else if (e.keyCode==27) {
        overlayPhoto.style.display="none"
    }
}

document.addEventListener("keyup",key )


// form 

function validateForm (aa) {
    var userValidate = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]{2}/;
    var age = /^[0-9]{3}/
    
    if (userValidate.test(aa) == false){
        document.getElementById("btn").disabled="true";
    }
    
    else {
        document.getElementById("btn").removeAttribute("disabled");
    }
}







