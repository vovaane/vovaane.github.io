  //animate scrolling charobay button
$(document).ready(function (){
$(".button").click(function(){
  $('html, body') .animate ({
    scrollTop:$("#section-one").offset().top
  }, 1000);
 });
 });
