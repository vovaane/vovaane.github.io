$(document).ready(function(){
  var steps=10;
  var angle=6;
  
  var angleDiff=angle/steps;
  var startAngle=-angle/2;
  var opacityDiff=(1/steps)+0.05;
  
  var $container=$(".container");
  var $original=$(".layer");
  
  $(".col").each(function(){
    $(this).clone().appendTo($(this).parent());
  })
  for(var i=0;i<steps;i++){
    var a=startAngle+(angleDiff*i);
    var $newLayer=$original
      .clone()
      .appendTo($container)
      .css({
        transform:"rotateX("+a+"deg)",
        opacity:opacityDiff
      })
    ;
  }
  $original.remove();
  
  var last=Date.now();
  var y=0;
  var speed=0.02;
  (function updateScroll(){
    var now=Date.now();
    var deltaT=now-last;
    y+=speed*deltaT;
    y=y % ($(".layer").height()/2);
    TweenMax.set($(".layer"),{
      y:-y,
      force3D:true,
      transformOrigin:"70% "+(($(window).height()/3)+y)+"px"
    });
    last=now;
    
    requestAnimationFrame(updateScroll);
  }());
})

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

