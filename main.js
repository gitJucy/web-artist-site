$(window).scroll
(function(){
  var wScroll= $(this).scrollTop();
 $('.font-wrap').css({
   "transform" : "translate(0px, "+wScroll*2.9+"%)"
 })

});
