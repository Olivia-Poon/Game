// Make panda jump when press button
//math.random for points with maximum height 
//have background repeat when panda reaches the edge of screen
//leopard randomly appear (boss)
//make score and lives go up/down
var posX = 0;
var speed = 3;
var scroller = function() {
	posX -= speed;
	$('body').css('background-position', posX+'px 0');
}
//for leopard
var blink= function(){
	$('.leopard').animate({right: "+=3000"}, 2000).fadeOut(1000,0).animate({right: "-=3000"}, 500).fadeIn(5000,0)
}


var pointheight= Math.floor((Math.random()*500)+100);

$(document).ready(function() {
	setInterval(scroller, 5);
	setInterval(blink, 5000);
	$(window).on('click', function(){
		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500)
	})
	
});







