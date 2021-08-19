var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.12em solid #fff}";
    document.body.appendChild(css);
};


var aText = new Array(
"I'm highly interested in programming, deeply eager to confront with new challenges and passionate about learning new technologies and utilities, involved in real useful projects of the utmost importance for human life. A genius Python developer who has studied electronics, worked in telecom industry and is motivated to keep on programming and machine learning. Never too late! Nothing impossible!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
sContents =  ' ';
iRow = Math.max(0, iIndex-iScrollAt);
var destination = document.getElementById("typedtext");

while ( iRow < iIndex ) {
sContents += aText[iRow++] + '<br />';
}
destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
if ( iTextPos++ == iArrLength ) {
iTextPos = 0;
iIndex++;
if ( iIndex != aText.length ) {
iArrLength = aText[iIndex].length;
setTimeout("typewriter()", 500);
}
} else {
setTimeout("typewriter()", iSpeed);
}
}
typewriter();

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("mybar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


