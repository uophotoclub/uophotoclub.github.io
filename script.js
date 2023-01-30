var frontImg = 1;
const credits = ["Hadi H.", "Jacob T.", "Jacob T.", "Jacob T."];

function zoomImgLoad() { //this function allows users to click on images in the shuffle section and be able to get a better look at it
    let display = document.getElementById('zoomImg');
    const source = ["images/photo/1.jpg", "images/photo/2.jpg", "images/photo/3.jpg", "images/photo/4.jpg"];
    let imgId = 'img'+String(frontImg);
    let img = document.getElementById(imgId);
    let imgDisplay = document.getElementById("Displayimg");
    let captionText = document.getElementById("caption");
    img.onclick = function(){
        display.style.display = "block";
        imgDisplay.src = source[frontImg-1];
        captionText.innerHTML = "By/Par : "+credits[frontImg-1];
    }
    let container = document.getElementsByClassName("zoomContainer")[0];
    container.onclick = function() {
        display.style.display = "none";
    }
}

$(document).on("scroll", function() { //function to reveal items on scroll
    var pageTopVal = $(document).scrollTop();
    var pageBottomVal = pageTopVal + $(window).height();
    var logos = $(".outline");
    for (var i = 0; i < logos.length; i++) {
        if ($(logos[i]).position().top < pageBottomVal) {
            $(logos[i]).addClass("visible");
        }
    }
});

function loadContent(l) { //this function makes sure everything is loaded when the page is opended so all the other functions can work like intended
    zoomImgLoad();
    shuffleLoad();
    if (l == "en") {
        var txt = 'Winter Vibes!'; //CHANGABLE TEXT
    } else if (l == 'fr') {
        var txt = "Ambiances d'hiver!";
    }
    setTimeout(function() {
        typeEventName(txt, 0);
    }, 1500);
}

function shuffleLoad() { //setup for the shuffling images
    img1.setAttribute("style", "transform: rotate(" + 12 + "deg)");
    img2.setAttribute("style", "transform: rotate(" + -9 + "deg)");
    img3.setAttribute("style", "transform: rotate(" + 5 + "deg)");
    document.getElementById('img1').style.zIndex = 13;
    document.getElementById('img2').style.zIndex = 12;
    document.getElementById('img3').style.zIndex = 11;
    document.getElementById('img4').style.zIndex = 10;
    if (window.innerWidth<=600) {
        document.getElementById("credits").innerHTML = "Image credits in order: "+ credits[0] + ", " + credits[1] + ", " + credits[2] + ", " + credits[3];
    }
}

function shuffle() { //allows the shuffling of the images
    let numOfImgs = 4;
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
    document.getElementById("credits").innerHTML = "Image credit/Crédit d'image: " + credits[frontImg-1];
    zoomImgLoad();
}

function typeEventName(txt, i) { //functionfor the typeout effect for the event theme name of the month
    if (i < txt.length) {
        document.getElementById("eventName").innerHTML += txt.charAt(i);
        i++;
        setTimeout(function() {
            typeEventName(txt, i);
        }, 150)
    }
}

function langChange(location) { //changes language of whatever page the user is on
    console.log(location);
    switch(location) {
        case 'homeEN':
            console.log('yes');
            window.location.href='index.html';
            break;
        case 'eventEN':
            window.location.href='../en/event.html';
            break;
        case 'policyEN':
            window.location.href='../en/policy.html';
            break;
        case 'homeFR':
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