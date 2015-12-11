// Make panda jump when press button
//math.random to randomly make leopard and points appear
//leopard randomly appear (boss) DONE
//make score and lives go up/down

//problems: 
//window is laggy when the point moves across the screen (too much animation)
//how to write code when images intersect ("collide")

//repeat background
var posX = 0;
var speed = 3;
var points = 0;
var scroller = function() {
	posX -= speed;
	$('body').css('background-position', posX+'px 0');

	$('.leopard').delay(random).animate({right: "+=3000"}, 2500).fadeOut(500,0).animate({right: "-=3000"}, 500).fadeIn(500,0);

	$('.point').delay(random).animate({right: "+=3000"}, 5500).fadeOut(500,0).animate({right: "-=3000"}, 5000).fadeIn(500,0);

}


//generates random number between 1-5 seconds
var random= Math.floor((Math.random() *5000) +1000); 

$(document).ready(function() {
	$('body').append("How to Play: Collect the bamboo to earn points! If the leopard touches you gameover! Try to get as many points as you can").css("color","white")
	setInterval(scroller, 5);

		if ($('.leopard').position().left == 0 && ($('.panda').position().left == 0)){
		$('body').stop();
		$('.stop').show('fast');


	}

	if ($('.point').position().left == 0 && $('.panda').position().bottom == 250){
		$('.pointh').append(points);
		points++
	}



	//makes panda jump on click
	$(window).on('click', function(){
		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500)
	})

	

});







