var frontImg = 1;

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
    img1.setAttribute("style", "transform: rotate(" + 12 + "deg)");
    img2.setAttribute("style", "transform: rotate(" + -9 + "deg)");
    img3.setAttribute("style", "transform: rotate(" + 5 + "deg)");
    document.getElementById('img1').style.zIndex = 13;
    document.getElementById('img2').style.zIndex = 12;
    document.getElementById('img3').style.zIndex = 11;
    document.getElementById('img4').style.zIndex = 10;
}

function shuffle() {
    let numOfImgs = 4;
    const credits = ["Hadi H.", "Jacob T.", "Jacob T.", "Jacob T."];
    let imgId = 'img' + String(frontImg);
    let shufObj = document.getElementById(imgId);
    document.getElementById("shuffleBtn").disabled = true;
    shufObj.style.animation='flip 2s ease';
    shufObj.style.zIndex -= numOfImgs;
    setTimeout(function() {
        shufObj.style.animation='';
        document.getElementById("shuffleBtn").disabled = false;
    }, 2000);
    if (frontImg < numOfImgs) {
        frontImg += 1;
    } else {
        frontImg = 1;
        shuffleLoad();
    }
    document.getElementById("credits").innerHTML = "Image credit/Crédit d'image: " + credits[frontImg-1]
    console.log(frontImg);
}

function typeEventName(txt, i) {
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

function langChange(location) {
    console.log(location);
    switch(location) {
        case 'homeEN':
            console.log('yes');
            //localStorage.setItem("langPref", "en");
            window.location.href='index.html';
            break;
        case 'eventEN':
            window.location.href='../en/event.html';
            break;
        case 'policyEN':
            window.location.href='../en/policy.html';
            break;
        case 'homeFR':
            //localStorage.setItem("langPref", "fr");
            window.location.href='fr.html';
            break;
        case 'eventFR':
            window.location.href='../fr/event.html';
            break;
        case 'policyFR':
            window.location.href='../fr/policy.html';
            break;
    }
}