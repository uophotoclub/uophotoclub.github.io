var frontImg = 1;
var LangIsEnglish = true;

function loadContent() {
    shuffleLoad();
    setTimeout(function() {
        typeEventName();
    }, 1500);
}

function shuffleLoad() {
    img1.setAttribute("style", "transform: rotate(" + 7 + "deg)");
    img2.setAttribute("style", "transform: rotate(" + -4 + "deg)");
    //img3.setAttribute("style", "transform: rotate(" + 1 + "deg)");
    document.getElementById('img1').style.zIndex = 7;
    document.getElementById('img2').style.zIndex = 6;
    document.getElementById('img3').style.zIndex = 5;
}

function shuffle() {
    let imgId = 'img' + String(frontImg);
    let shufObj = document.getElementById(imgId);
    document.getElementById("shuffleBtn").disabled = true;
    shufObj.style.animation='flip 2s ease';
    shufObj.style.zIndex -= 3;
    setTimeout(function() {
        shufObj.style.animation='';
        document.getElementById("shuffleBtn").disabled = false;
    }, 2000);
    if (frontImg < 3) {
        frontImg += 1;
    } else {
        frontImg = 1;
        shuffleLoad();
    }
}

function apply() {
    alert("The application form isn't ready yet!")
}


var i = 0;
var txt = 'Winter Holidays!'; //CHANGABLE TEXT
var speed = 150;

function typeEventName() {
  if (i < txt.length) {
    document.getElementById("eventName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeEventName, speed);
  }
}


$(document).on("scroll", function() {
    var pageTopVal = $(document).scrollTop();
    var pageBottomVal = pageTopVal + $(window).height();
    var logos = $(".outline");
  
    for (var i = 0; i < logos.length; i++) {
  
        if ($(logos[i]).position().top < pageBottomVal) {
            $(logos[i]).addClass("visible");
        }/* else {
            $(logos[i]).removeClass("visible");
        }*/
    }
});

//changes the language of the site
function changeLang() {
    document.getElementById("lang").disabled = true;
    if (LangIsEnglish == true) {
        //change to french
        console.log("change to french");
        LangIsEnglish = false;
    } else {
        //change to english
        console.log("change to english");  //the website language is gonna go back to english if they go on a new page... look into 'session'
        LangIsEnglish = true;
    }
    setTimeout(function() {
        document.getElementById("lang").disabled = false;
    }, 2000);
}