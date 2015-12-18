// // Make panda jump when press button
// //math.random to randomly make leopard and points appear
// //leopard randomly appear (boss) DONE
// //make score and lives go up/down

// //problems: 
// //window is laggy when the point moves across the screen (too much animation)
// //how to write code when images intersect ("collide")

// //repeat background
// var posX = 0;
// var speed = 2;
// var points = 0;
// var scroller = function() {
// 	posX -= speed;
// 	$('body').css('background-position', posX+'px 0');

// 	$('.leopard').delay(random).animate({right: "+=3000"}, 2500).fadeOut(500,0).animate({right: "-=3000"}, 500).fadeIn(500,0);

// 	$('.point').delay(random).animate({right: "+=3000"}, 5500).fadeOut(500,0).animate({right: "-=3000"}, 5000).fadeIn(500,0);



// 		if ($('.leopard').position().left == 0 && $('.panda').position().left == 0){
// 		$('body').stop();


// 	}

// 	if ($('.point').position().left == 0 && $('.panda').position().bottom == 250){

// 	}
// }







// //generates random number between 1-5 seconds
// var random= Math.floor((Math.random() *5000) +1000); 

// $(document).ready(function() {          
// 	//window.alert("How to Play: Collect the bamboo to earn points! If the leopard touches you gameover! Click anywhere on the window to get the Panda to jump to avoid the leopard. Try to get as many points as you can");          
// 	$('h1').fadeOut('slow'); 
// 	setInterval(scroller,5);


// 	//makes panda jump on click
// 	$(window).on('click', function(){
// 		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500)
// 	})

	

// });



// Make panda jump when press button
// math.random to randomly make leopard and points appear
// leopard randomly appear (boss) DONE
// make score and lives go up/down

// problems: 
// window is laggy when the point moves across the screen (too much animation)
// how to write code when images intersect ("collide")

// repeat background
var posX = 0;
var speed = 3;

var counter =0;

var point = function() {
    counter++;
    if (counter >= 0) {
    }
}

var scroller = function() {
	posX -= speed;
	$('body').css('background-position', posX+'px 0');

	$('.leopard').delay(random).animate({right: "+=3000"}, 2500).fadeOut(500,0).animate({right: "-=3000"}, 500).fadeIn(500,0)
	
	if (($('.leopard').position().left <= 600 && $('.panda').position().top < 682) || ($('.leopard').position().left >=0 && $('.panda').position().top <682) ){
     
	}
	else if ($('.leopard').position().left <= 0 && $('.panda').position().left == 0){
		clearInterval(interval1);
		clearInterval(interval2);

		//$('.panda').fadeOut('fast');
		//$('.leopard').fadeOut('fast');
		//$('.leopard').stop();
		$('.leopard').stop(true, true).fadeOut('fast');
		//$('.leopard').css("display", "none");
		$('.panda').css("display", "none");
		$('.stop').show();
	}

}

//generates random number between 1-5 seconds
var random= Math.floor((Math.random() *5000) +1000); 

$(document).ready(function() {          
	//window.alert("How to Play: Collect the bamboo to earn points! If the leopard touches you gameover! Click anywhere on the window to get the Panda to jump to avoid the leopard. Try to get as many points as you can");          
	$('body').delay('5000');
	$('h1').fadeOut('slow'); 
	setInterval(scroller,5);


	//makes panda jump on click
	$(window).on('click', function(){
		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500)
	})

	

});


