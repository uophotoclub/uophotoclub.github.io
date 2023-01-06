var frontImg = 1;
var LangIsEnglish = true;

function loadContent(l) {
    shuffleLoad();
    if (l == "en") {
        var txt = 'Winter Holidays!'; //CHANGABLE TEXT
    } else if (l == 'fr') {
        var txt = "Vacances d'hivers!";
    }
    setTimeout(function() {
        typeEventName(txt, 0);
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

function typeEventName(txt, i) {
    console.log(txt);
    if (i < txt.length) {
        document.getElementById("eventName").innerHTML += txt.charAt(i);
        i++;
        setTimeout(function() {
            typeEventName(txt, i);
        }, 150)
    }
}

$(document).on("scroll", function() {
    var pageTopVal = $(document).scrollTop();
    var pageBottomVal = pageTopVal + $(window).height();
    var logos = $(".outline");
    for (var i = 0; i < logos.length; i++) {
        if ($(logos[i]).position().top < pageBottomVal) {
            $(logos[i]).addClass("visible");
        }
    }
});