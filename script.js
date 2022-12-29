var frontImg = 1;

function loadContent() {
    img1.setAttribute("style", "transform: rotate(" + 7 + "deg)");
    img2.setAttribute("style", "transform: rotate(" + -4 + "deg)");
    //img3.setAttribute("style", "transform: rotate(" + 1 + "deg)");
    document.getElementById('img1').style.zIndex = 7;
    document.getElementById('img2').style.zIndex = 6;
    document.getElementById('img3').style.zIndex = 5;
    setTimeout(function() {
        typeEventName();
    }, 1500);
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
        shuffleload();
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