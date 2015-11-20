// Make panda move with keypress
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

setInterval(scroller, 5);